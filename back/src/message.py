from datetime import datetime

from src.classification import classification


class Message:
    content: str
    role: str
    should_be_analyzed: bool
    category: str | None = None

    def __init__(
        self,
        content: str,
        role: str,
        should_be_analyzed: bool,
    ):
        self.content = content
        self.role = role
        self.should_be_analyzed = should_be_analyzed and len(self.content) != 0
        if self.should_be_analyzed:
            self.category = classification(content)
        self.date = datetime.utcnow()
