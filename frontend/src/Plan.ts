export interface Plan {
    plan_id: number;
    membership_record_number: number;
    title: string;
    target_date: string;
    description: string;
    notifications: number;
    reminder_date_time: string;
    reminder_type: string;
    repeat_frequency: string;
    status: string;
    custom_message: string;
}