enum Subject {
  MATHS = "maths",
  LANGUAGE = "language",
  SCIENCE = "science",
  HISTORY = "history",
  CODING = "coding",
  ENGLISH_LITERATURE = "english literature",
  GEOGRAPHY = "geography",
  ECONOMICS = "economics",
  FINANCE = "finance",
  BUSINESS = "business",
}

type Companion = {
  $id: string;
  name: string;
  subject: Subject;
  topic: string;
  duration: number;
  bookmarked: boolean;
};