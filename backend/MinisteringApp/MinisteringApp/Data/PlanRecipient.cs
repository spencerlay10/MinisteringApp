using System;
using System.Collections.Generic;

namespace MinisteringApp.Data;

public partial class PlanRecipient
{
    public int Id { get; set; }

    public int PlanId { get; set; }

    public int RecipientRecordNumber { get; set; }

    public virtual Plan Plan { get; set; } = null!;

    public virtual Member RecipientRecordNumberNavigation { get; set; } = null!;
}
