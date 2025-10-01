
from typing import List, Dict

def analyze_corners(events: list[dict]) -> dict:
       total_corners = sum(1 for e in events if e["type"] == "corner")
       goals_from_corners = sum(1 for e in events if e["type"] == "corner" and e["result"] == "goal")

       if total_corners == 0:
           return {"total_corners": 0, "goals_from_corners": 0, "success_rate": 0.0}

       success_rate = goals_from_corners / total_corners
       recommendation = "usar más córners cerrados" if success_rate > 0.2 else "probar saques cortos"

       return {
           "total_corners": total_corners,
           "goals_from_corners": goals_from_corners,
           "success_rate": round(success_rate, 2),
           "recommendation": recommendation
       }