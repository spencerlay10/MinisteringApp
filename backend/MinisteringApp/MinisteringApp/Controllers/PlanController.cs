using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MinisteringApp.Data;

namespace MinisteringApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlanController : ControllerBase
    {
        private readonly MinisteringDatabaseContext _context;

        public PlanController(MinisteringDatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Plan/GetAllPlans
        [HttpGet("GetAllPlans")]
        public IActionResult GetAllPlans(int pageSize, int pageNumber)
        {
            var planList = _context.Plans
                .Include(p => p.PlanRecipients)
                .Skip((pageNumber - 1) * pageSize)
                .Take(pageSize)
                .ToList();

            var totalPlans = _context.Plans.Count();

            var response = new
            {
                Plans = planList,
                TotalPlans = totalPlans
            };

            return Ok(response);
        }

        // GET: api/Plan/GetPlanById/5
        [HttpGet("GetPlanById/{id}")]
        public IActionResult GetPlanById(int id)
        {
            var plan = _context.Plans
                .Include(p => p.PlanRecipients)
                .ThenInclude(pr => pr.RecipientRecordNumberNavigation)
                .FirstOrDefault(p => p.PlanId == id);

            if (plan == null)
            {
                return NotFound(new { Message = "Plan not found" });
            }

            return Ok(plan);
        }

        // GET: api/Plan/GetMembers
        [HttpGet("GetMembers")]
        public IActionResult GetMembers(string search = "")
        {
            var members = _context.Members
                .Where(m => string.IsNullOrEmpty(search) ||
                       m.FirstName.Contains(search) ||
                       m.LastName.Contains(search))
                .Take(10)
                .Select(m => new
                {
                    m.MembershipRecordNumber,
                    m.FirstName,
                    m.LastName,
                    FullName = m.FirstName + " " + m.LastName
                })
                .ToList();

            return Ok(members);
        }

        // POST: api/Plan/AddPlan
        [HttpPost("AddPlan")]
        public IActionResult AddPlan([FromBody] Plan plan)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                _context.Plans.Add(plan);
                _context.SaveChanges();

                return CreatedAtAction("GetPlanById", new { id = plan.PlanId }, plan);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { Message = ex.Message });
            }
        }

        // PUT: api/Plan/UpdatePlan/5
        [HttpPut("UpdatePlan/{id}")]
        public IActionResult UpdatePlan(int id, [FromBody] Plan plan)
        {
            if (id != plan.PlanId)
            {
                return BadRequest(new { Message = "Plan ID mismatch" });
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                // Get existing plan recipients to compare
                var existingPlanRecipients = _context.PlanRecipients
                    .Where(pr => pr.PlanId == id)
                    .ToList();

                // Find recipients to remove (in existing but not in updated plan)
                var recipientsToRemove = existingPlanRecipients
                    .Where(epr => !plan.PlanRecipients.Any(pr => pr.Id == epr.Id))
                    .ToList();

                foreach (var recipient in recipientsToRemove)
                {
                    _context.PlanRecipients.Remove(recipient);
                }

                // Update the plan
                _context.Entry(plan).State = EntityState.Modified;

                // Add new recipients
                foreach (var recipient in plan.PlanRecipients)
                {
                    if (recipient.Id == 0)
                    {
                        _context.PlanRecipients.Add(recipient);
                    }
                    else
                    {
                        _context.Entry(recipient).State = EntityState.Modified;
                    }
                }

                _context.SaveChanges();

                return Ok(plan);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PlanExists(id))
                {
                    return NotFound(new { Message = "Plan not found" });
                }
                else
                {
                    throw;
                }
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { Message = ex.Message });
            }
        }

        // GET: api/Plan/GetIdeas
        [HttpGet("GetIdeas")]
        public IActionResult GetIdeas()
        {
            var ideas = new List<string>
            {
                "Visit their home",
                "Invite them to dinner",
                "Send a thoughtful message",
                "Offer to help with a project",
                "Share a spiritual thought",
                "Bring a small gift or treat",
                "Invite to a church activity",
                "Ask about their family",
                "Remember their birthday",
                "Follow up on previous conversations"
            };

            return Ok(ideas);
        }

        private bool PlanExists(int id)
        {
            return _context.Plans.Any(p => p.PlanId == id);
        }
    }
}