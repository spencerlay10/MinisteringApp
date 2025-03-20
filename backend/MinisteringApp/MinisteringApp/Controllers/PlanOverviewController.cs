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
                        RecipientName = m.FirstName + " " + m.LastName
                    }
                ).ToList();

            return Ok(new
            {
                Plans = currentPlanList,
                Assignments = assignments
            });

        }

        [HttpGet("GetPastPlans")]

        public IEnumerable<Plan> GetPast()
        {
            var memberId = "3124247758";
            var pastPlanList = _context.Plans
                .Where(x => x.MembershipRecordNumber == memberId & x.Status == "past").ToList();

            return (pastPlanList);
        }
    }
}