using System;
using System.Collections.Generic;

namespace MinisteringApp.Data;

public partial class Plan
{
    public int PlanId { get; set; }

    public int MembershipRecordNumber { get; set; }

    public string Title { get; set; } = null!;

    public string TargetDate { get; set; } = null!;

    public string? Description { get; set; }

    public int Notifications { get; set; }

    public string? ReminderDateTime { get; set; }

    public string? ReminderType { get; set; }

    public string? RepeatFrequency { get; set; }

    public string? Status { get; set; }

    public string? CustomMessage { get; set; }

    public virtual Member MembershipRecordNumberNavigation { get; set; } = null!;

    public virtual ICollection<PlanRecipient> PlanRecipients { get; set; } = new List<PlanRecipient>();

    public virtual ICollection<Report> Reports { get; set; } = new List<Report>();
}
