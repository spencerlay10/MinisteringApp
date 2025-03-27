export interface Plan {
    id: Key | null | undefined;
    customMessage: string;
    description: string;
    membershipRecordNumber: string;
    notifications: number;
    planId: number;
    reminderDateTime: string;
    reminderType: string;
    repeatFrequency: string;
    targetDate: string;
    title: string;
}