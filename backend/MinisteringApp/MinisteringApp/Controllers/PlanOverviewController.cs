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

        public IEnumerable<Plan> Get()
        {
            var currentPlanList = _context.Plans
                .Where(x => x.Status == "current")
                .ToList();
            return currentPlanList;
        }
    }
}
