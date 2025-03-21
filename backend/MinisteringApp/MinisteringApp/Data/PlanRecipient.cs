using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MinisteringApp.Data;

public partial class PlanRecipient
{
    [Key]
    public int Id { get; set; }

    public int PlanId { get; set; }

    public string RecipientRecordNumber { get; set; }

    public virtual Plan Plan { get; set; } = null!;

    public virtual Member RecipientRecordNumberNavigation { get; set; } = null!;
}
