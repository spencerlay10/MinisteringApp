using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MinisteringApp.Data;

namespace MinisteringApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PlanOverviewController : ControllerBase
    {
        private MinisteringDatabaseContext _context;

        public PlanOverviewController(MinisteringDatabaseContext context)
        {
            _context = context;
        }

        [HttpGet("GetAllPlans")]

        public IActionResult Get()
        {

            var memberId = "3124247758";
            var currentPlanList = _context.Plans
                .Where(x => x.MembershipRecordNumber == memberId & x.Status == "current").ToList();

            var assignments = _context.Assignments
                .Where(a => a.MinisterRecordNumberId == memberId)
                .Join(
                    _context.Members,
                    a => a.RecipientMembershipRecordNumber,
                    m => m.MembershipRecordNumber,
                    (a, m) => new
                    {
                        AssignmentId = a.AssignmentId,
                        RecipientName = m.FirstName + " " + m.LastName,
                        PhoneNumber = m.PhoneNumber,
                        Email = m.Email,
                    }
                ).ToList();

            var companions = _context.Companions
                .Where(a => a.CompanionMembershipRecordNumber == memberId)
                .Join(
                    _context.Members,
                    a => a.CompanionMembershipRecordNumber,
                    m => m.MembershipRecordNumber,
                    (a, m) => new
                    {
                        CompanionId = a.CompanionMembershipRecordNumber,
                        RecipientName = m.FirstName + " " + m.LastName,
                        CompPhoneNumber = m.PhoneNumber,
                        CompEmail = m.Email,
                    }
                ).ToList();

            return Ok(new
            {
                Plans = currentPlanList,
                Assignments = assignments,
                Companions = companions,
            });

        }

        [HttpGet("GetPastPlans")]

        public IEnumerable<Plan> GetPast()
        {
            var memberId = "124247758";
            var pastPlanList = _context.Plans
                .Where(x => x.MembershipRecordNumber == memberId & x.Status == "past").ToList();

            return (pastPlanList);
        }
    }
}