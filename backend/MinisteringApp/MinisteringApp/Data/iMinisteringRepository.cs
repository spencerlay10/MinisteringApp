namespace MinisteringApp.Data
{
    public interface iMinisteringRepository
    {
        List<Assignment> assignments { get; }
        List<Companion> companions { get; }
        List<Member> members { get; }
        List<PlanRecipient> plan_recipients { get; }
        List<Plan> plans { get; }
        List<Report> reports { get; }
        List<User> users { get; }
    }
}
