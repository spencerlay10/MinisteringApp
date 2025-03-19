using MinisteringApp.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace MinisteringApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LandingController : ControllerBase
    {
        private readonly MinisteringDatabaseContext _context;

        public LandingController(MinisteringDatabaseContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Assignment> Get()
        {
            // Get assignments with related data
            var assignments = _context.Assignments
                .Include(a => a.MinisterRecordNumber) // Includes related member for MinisterRecordNumberId
                .Include(a => a.RecipientMembershipRecordNumberNavigation) // Includes related member for RecipientMembershipRecordNumber
                .Include(a => a.Plan) // Includes related Plan
                .Include(a => a.Companion) // Includes related Companions
                .ToList();

            return assignments;
        }
    }
}


