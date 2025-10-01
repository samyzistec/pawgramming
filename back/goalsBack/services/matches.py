# goalsBack/services/matches.py
from typing import List, Dict

# Eventos de ejemplo (luego se reemplaza con datos de la API)
MATCH_EVENTS = {
    101: [
        {"minute": 5, "type": "shot", "player": "Juan Pérez", "outcome": "miss"},
        {"minute": 23, "type": "goal", "player": "Juan Pérez", "outcome": "goal"},
        {"minute": 47, "type": "yellow_card", "player": "Carlos López"}
    ],
    102: [
        {"minute": 12, "type": "corner", "player": "Carlos López"},
        {"minute": 67, "type": "goal", "player": "Carlos López", "outcome": "goal"}
    ]
}

def get_match_events(match_id: int) -> List[Dict]:
    """Devuelve lista de eventos de un partido"""
    return MATCH_EVENTS.get(match_id, [{"error": "Partido no encontrado"}])