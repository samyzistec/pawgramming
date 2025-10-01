# goalsBack/services/players.py
from typing import Dict

# Datos de ejemplo (esto luego lo reemplazamos con query a BD o API real)
PLAYERS = {
    10: {"name": "Juan Pérez", "position": "Forward", "goals": 12, "assists": 5},
    8: {"name": "Carlos López", "position": "Midfielder", "goals": 4, "assists": 10},
    1: {"name": "Roberto Sánchez", "position": "Goalkeeper", "saves": 56, "clean_sheets": 12}
}

def get_player_stats(player_id: int) -> Dict:
    """Devuelve estadísticas básicas de un jugador"""
    return PLAYERS.get(player_id, {"error": "Jugador no encontrado"})