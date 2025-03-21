using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace MinisteringApp.Data;

public partial class Report
{
    [Key]
    public int ReportId { get; set; }

    public int PlanId { get; set; }

    public string DateCompleted { get; set; } = null!;

    public string? Notes { get; set; }

    public int SendToLeaders { get; set; }

    public string MinisterRecordNumber { get; set; }

    public virtual Plan Plan { get; set; } = null!;
}
