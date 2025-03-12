using System;
using System.Collections.Generic;

namespace MinisteringApp.Data;

public partial class Member
{
    public int MembershipRecordNumber { get; set; }

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string? Email { get; set; }

    public string? PhoneNumber { get; set; }

    public byte[]? Image { get; set; }

    public string WardBranch { get; set; } = null!;

    public string Stake { get; set; } = null!;

    public virtual ICollection<Assignment> AssignmentMinisterRecordNumbers { get; set; } = new List<Assignment>();

    public virtual ICollection<Assignment> AssignmentRecipientMembershipRecordNumberNavigations { get; set; } = new List<Assignment>();

    public virtual ICollection<Companion> CompanionCompanionMembershipRecordNumberNavigations { get; set; } = new List<Companion>();

    public virtual ICollection<Companion> CompanionMinisterRecordNumberNavigations { get; set; } = new List<Companion>();

    public virtual ICollection<PlanRecipient> PlanRecipients { get; set; } = new List<PlanRecipient>();

    public virtual ICollection<Plan> Plans { get; set; } = new List<Plan>();
}
