import { TransactionStatus } from "../../../../constants/status";

export interface TransactionCardProps {
  sender: string;
  receiver: string;
  value: number;
  unit: string;
  icon: string;
  submitted: boolean;
  status?: TransactionStatus;
  approvalsReceived?: number;
  approvalsRequired?: number;
  timestamp: string;
}
