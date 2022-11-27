type WorkHistoryItemType = {
  role: string;
  organization: string;
  period: {
    from: string;
    to: string;
  }
  achievments: string[];
  info: string[];
  tags: string[];
}

export default WorkHistoryItemType;