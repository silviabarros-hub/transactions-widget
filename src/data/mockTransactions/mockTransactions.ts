import { TransactionStatus } from "../../constants/status";
import { Transaction } from "./mockTransactions.interface";

export const mockTransactions: Transaction[] = [
  {
    id: "1",
    sender: "0xAAA111AAA111AAA111AAA111AAA111AAA111AAA1",
    receiver: "0xBBB222BBB222BBB222BBB222BBB222BBB222BBB2",
    value: 500,
    unit: "BTC",
    icon: "/src/assets/token-icons/bitcoin.svg",
    submitted: true,
    status: TransactionStatus.Approved,
    timestamp: "2025-02-17T23:00:00Z",
  },
  {
    id: "3",
    sender: "0xCCC333CCC333CCC333CCC333CCC333CCC333CCC3",
    receiver: "0xDDD444DDD444DDD444DDD444DDD444DDD444DDD4",
    value: 250,
    unit: "AVAX",
    icon: "/src/assets/token-icons/avalanche.svg",
    submitted: true,
    status: TransactionStatus.Rejected,
    timestamp: "2025-02-17T21:00:00Z",
  },
  {
    id: "5",
    sender: "0xEEE555EEE555EEE555EEE555EEE555EEE555EEE5",
    receiver: "0xFFF666FFF666FFF666FFF666FFF666FFF666FFF6",
    value: 1000,
    unit: "OP",
    icon: "/src/assets/token-icons/optimism-2.svg",
    submitted: true,
    status: TransactionStatus.Submitted,
    timestamp: "2025-02-17T19:00:00Z",
  },
  {
    id: "7",
    sender: "0x111AAA111AAA111AAA111AAA111AAA111AAA111A",
    receiver: "0x222BBB222BBB222BBB222BBB222BBB222BBB222B",
    value: 750,
    unit: "SUI",
    icon: "/src/assets/token-icons/sui.svg",
    submitted: true,
    status: TransactionStatus.Approved,
    timestamp: "2025-02-17T17:00:00Z",
  },
  {
    id: "9",
    sender: "0x333CCC333CCC333CCC333CCC333CCC333CCC333C",
    receiver: "0x444DDD444DDD444DDD444DDD444DDD444DDD444D",
    value: 300,
    unit: "STR",
    icon: "/src/assets/token-icons/starknet.svg",
    submitted: true,
    status: TransactionStatus.Approved,
    timestamp: "2025-02-17T15:00:00Z",
  },
  {
    id: "11",
    sender: "0x555EEE555EEE555EEE555EEE555EEE555EEE555E",
    receiver: "0x666FFF666FFF666FFF666FFF666FFF666FFF666F",
    value: 850,
    unit: "AVAX",
    icon: "/src/assets/token-icons/avalanche.svg",
    submitted: true,
    status: TransactionStatus.Rejected,
    timestamp: "2025-02-17T13:00:00Z",
  },
  {
    id: "13",
    sender: "0x777AAA777AAA777AAA777AAA777AAA777AAA777A",
    receiver: "0x888BBB888BBB888BBB888BBB888BBB888BBB888B",
    value: 450,
    unit: "BTC",
    icon: "/src/assets/token-icons/bitcoin.svg",
    submitted: true,
    status: TransactionStatus.Submitted,
    timestamp: "2025-02-17T11:00:00Z",
  },
  {
    id: "2",
    sender: "0x999CCC999CCC999CCC999CCC999CCC999CCC999C",
    receiver: "0xAAA111AAA111AAA111AAA111AAA111AAA111AAA2",
    value: 0.5,
    unit: "BTC",
    icon: "/src/assets/token-icons/bitcoin.svg",
    submitted: false,
    approvalsReceived: 1,
    approvalsRequired: 5,
    timestamp: "2025-02-17T18:00:00Z",
  },
  {
    id: "4",
    sender: "0xBBB222BBB222BBB222BBB222BBB222BBB222BBB3",
    receiver: "0xCCC333CCC333CCC333CCC333CCC333CCC333CCC4",
    value: 75,
    unit: "AVAX",
    icon: "/src/assets/token-icons/avalanche.svg",
    submitted: false,
    approvalsReceived: 2,
    approvalsRequired: 5,
    timestamp: "2025-02-17T16:00:00Z",
  },
  {
    id: "6",
    sender: "0xDDD444DDD444DDD444DDD444DDD444DDD444DDD5",
    receiver: "0xEEE555EEE555EEE555EEE555EEE555EEE555EEE6",
    value: 125,
    unit: "OP",
    icon: "/src/assets/token-icons/optimism-2.svg",
    submitted: false,
    approvalsReceived: 3,
    approvalsRequired: 5,
    timestamp: "2025-02-17T10:00:00Z",
  },
  {
    id: "8",
    sender: "0xFFF666FFF666FFF666FFF666FFF666FFF666FFF7",
    receiver: "0x111AAA111AAA111AAA111AAA111AAA111AAA111B",
    value: 60,
    unit: "SUI",
    icon: "/src/assets/token-icons/sui.svg",
    submitted: false,
    approvalsReceived: 0,
    approvalsRequired: 5,
    timestamp: "2025-02-16T03:00:00Z",
  },
  {
    id: "10",
    sender: "0x222BBB222BBB222BBB222BBB222BBB222BBB222C",
    receiver: "0x333CCC333CCC333CCC333CCC333CCC333CCC333D",
    value: 400,
    unit: "STR",
    icon: "/src/assets/token-icons/starknet.svg",
    submitted: false,
    approvalsReceived: 2,
    approvalsRequired: 5,
    timestamp: "2025-02-15T01:00:00Z",
  },
  {
    id: "12",
    sender: "0x444DDD444DDD444DDD444DDD444DDD444DDD444E",
    receiver: "0x555EEE555EEE555EEE555EEE555EEE555EEE555F",
    value: 300,
    unit: "AVAX",
    icon: "/src/assets/token-icons/avalanche.svg",
    submitted: false,
    approvalsReceived: 3,
    approvalsRequired: 5,
    timestamp: "2025-01-20T23:00:00Z",
  },
  {
    id: "14",
    sender: "0x666FFF666FFF666FFF666FFF666FFF666FFF666G",
    receiver: "0x777AAA777AAA777AAA777AAA777AAA777AAA777B",
    value: 90,
    unit: "OP",
    icon: "/src/assets/token-icons/optimism-2.svg",
    submitted: false,
    approvalsReceived: 4,
    approvalsRequired: 5,
    timestamp: "2025-01-16T21:00:00Z",
  },
];
