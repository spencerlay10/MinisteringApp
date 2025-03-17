namespace MinisteringApp.Data
{
    public class EFMinisteringRepository : iMinisteringRepository
    {
        private MinisteringDatabaseContext _context;

        // Constructor
        public EFMinisteringRepository(MinisteringDatabaseContext context)
        {
            _context = context;
        }

        // Data
        public List<Assignment> assignments => _context.Assignments.ToList();
        public List<Companion> companions => _context.Companions.ToList();
        public List<Member> members => _context.Members.ToList();
        public List<PlanRecipient> plan_recipients => _context.PlanRecipients.ToList();
        public List<Plan> plans => _context.Plans.ToList();
        public List<Report> reports => _context.Reports.ToList();
        public List<User> users => _context.Users.ToList();
    }
}
