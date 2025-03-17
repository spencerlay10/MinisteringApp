using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace MinisteringApp.Data;

public partial class MinisteringDatabaseContext : DbContext
{
    public MinisteringDatabaseContext()
    {
    }

    public MinisteringDatabaseContext(DbContextOptions<MinisteringDatabaseContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Assignment> Assignments { get; set; }

    public virtual DbSet<Companion> Companions { get; set; }

    public virtual DbSet<Member> Members { get; set; }

    public virtual DbSet<Plan> Plans { get; set; }

    public virtual DbSet<PlanRecipient> PlanRecipients { get; set; }

    public virtual DbSet<Report> Reports { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlite("Data Source=MinisteringDatabase.db");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Assignment>(entity =>
        {
            entity.ToTable("assignments");

            entity.HasIndex(e => e.AssignmentId, "IX_assignments_assignment_id").IsUnique();

            entity.Property(e => e.AssignmentId).HasColumnName("assignment_id");
            entity.Property(e => e.BeginDate).HasColumnName("begin_date");
            entity.Property(e => e.EndDate).HasColumnName("end_date");
            entity.Property(e => e.MinisterRecordNumberId).HasColumnName("minister_record_number_id");
            entity.Property(e => e.RecipientMembershipRecordNumber).HasColumnName("recipient_membership_record_number");

            entity.HasOne(d => d.MinisterRecordNumber).WithMany(p => p.AssignmentMinisterRecordNumbers)
                .HasForeignKey(d => d.MinisterRecordNumberId)
                .OnDelete(DeleteBehavior.ClientSetNull);

            entity.HasOne(d => d.RecipientMembershipRecordNumberNavigation).WithMany(p => p.AssignmentRecipientMembershipRecordNumberNavigations)
                .HasForeignKey(d => d.RecipientMembershipRecordNumber)
                .OnDelete(DeleteBehavior.ClientSetNull);
        });

        modelBuilder.Entity<Companion>(entity =>
        {
            entity.ToTable("companions");

            entity.HasIndex(e => e.Id, "IX_companions_id").IsUnique();

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.BeginDate).HasColumnName("begin_date");
            entity.Property(e => e.CompanionMembershipRecordNumber).HasColumnName("companion_membership_record_number");
            entity.Property(e => e.EndDate).HasColumnName("end_date");
            entity.Property(e => e.MinisterRecordNumber).HasColumnName("minister_record_number");

            entity.HasOne(d => d.CompanionMembershipRecordNumberNavigation).WithMany(p => p.CompanionCompanionMembershipRecordNumberNavigations)
                .HasForeignKey(d => d.CompanionMembershipRecordNumber)
                .OnDelete(DeleteBehavior.ClientSetNull);

            entity.HasOne(d => d.MinisterRecordNumberNavigation).WithMany(p => p.CompanionMinisterRecordNumberNavigations)
                .HasForeignKey(d => d.MinisterRecordNumber)
                .OnDelete(DeleteBehavior.ClientSetNull);
        });

        modelBuilder.Entity<Member>(entity =>
        {
            entity.HasKey(e => e.MembershipRecordNumber);

            entity.ToTable("members");

            entity.HasIndex(e => e.MembershipRecordNumber, "IX_members_membership_record_number").IsUnique();

            entity.Property(e => e.MembershipRecordNumber)
                .ValueGeneratedNever()
                .HasColumnName("membership_record_number");
            entity.Property(e => e.Email).HasColumnName("email");
            entity.Property(e => e.FirstName).HasColumnName("first_name");
            entity.Property(e => e.Image).HasColumnName("image");
            entity.Property(e => e.LastName).HasColumnName("last_name");
            entity.Property(e => e.PhoneNumber).HasColumnName("phone_number");
            entity.Property(e => e.Stake).HasColumnName("stake");
            entity.Property(e => e.WardBranch).HasColumnName("ward_branch");
        });

        modelBuilder.Entity<Plan>(entity =>
        {
            entity.ToTable("plans");

            entity.HasIndex(e => e.PlanId, "IX_plans_plan_id").IsUnique();

            entity.Property(e => e.PlanId).HasColumnName("plan_id");
            entity.Property(e => e.CustomMessage).HasColumnName("custom_message");
            entity.Property(e => e.Description).HasColumnName("description");
            entity.Property(e => e.MembershipRecordNumber).HasColumnName("membership_record_number");
            entity.Property(e => e.Notifications).HasColumnName("notifications");
            entity.Property(e => e.ReminderDateTime).HasColumnName("reminder_date_time");
            entity.Property(e => e.ReminderType).HasColumnName("reminder_type");
            entity.Property(e => e.RepeatFrequency).HasColumnName("repeat_frequency");
            entity.Property(e => e.Status).HasColumnName("status");
            entity.Property(e => e.TargetDate).HasColumnName("target_date");
            entity.Property(e => e.Title).HasColumnName("title");

            entity.HasOne(d => d.MembershipRecordNumberNavigation).WithMany(p => p.Plans)
                .HasForeignKey(d => d.MembershipRecordNumber)
                .OnDelete(DeleteBehavior.ClientSetNull);
        });

        modelBuilder.Entity<PlanRecipient>(entity =>
        {
            entity.ToTable("plan_recipients");

            entity.HasIndex(e => e.Id, "IX_plan_recipients_id").IsUnique();

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.PlanId).HasColumnName("plan_id");
            entity.Property(e => e.RecipientRecordNumber).HasColumnName("recipient_record_number");

            entity.HasOne(d => d.Plan).WithMany(p => p.PlanRecipients)
                .HasForeignKey(d => d.PlanId)
                .OnDelete(DeleteBehavior.ClientSetNull);

            entity.HasOne(d => d.RecipientRecordNumberNavigation).WithMany(p => p.PlanRecipients)
                .HasForeignKey(d => d.RecipientRecordNumber)
                .OnDelete(DeleteBehavior.ClientSetNull);
        });

        modelBuilder.Entity<Report>(entity =>
        {
            entity.ToTable("reports");

            entity.HasIndex(e => e.ReportId, "IX_reports_report_id").IsUnique();

            entity.Property(e => e.ReportId).HasColumnName("report_id");
            entity.Property(e => e.DateCompleted).HasColumnName("date_completed");
            entity.Property(e => e.MinisterRecordNumber).HasColumnName("minister_record_number");
            entity.Property(e => e.Notes).HasColumnName("notes");
            entity.Property(e => e.PlanId).HasColumnName("plan_id");
            entity.Property(e => e.SendToLeaders).HasColumnName("send_to_leaders");

            entity.HasOne(d => d.Plan).WithMany(p => p.Reports)
                .HasForeignKey(d => d.PlanId)
                .OnDelete(DeleteBehavior.ClientSetNull);
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.ToTable("users");

            entity.HasIndex(e => e.UserId, "IX_users_user_id").IsUnique();

            entity.Property(e => e.UserId).HasColumnName("user_id");
            entity.Property(e => e.HashedPassword).HasColumnName("hashed_password");
            entity.Property(e => e.MembershipRecordNumber).HasColumnName("membership_record_number");
            entity.Property(e => e.Role).HasColumnName("role");
            entity.Property(e => e.Username).HasColumnName("username");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
