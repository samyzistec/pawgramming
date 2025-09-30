from fastapi import FastAPI
from goalsBack.services.defending_corners import analyze_corners
from goalsBack.services.players import get_player_stats
from goalsBack.services.matches import get_match_events
app = FastAPI()


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}

# Nuevo endpoint
@app.post("/recommendations/corners")
async def corners_recommendations(events: list[dict]):
    result = analyze_corners(events)
    return result

#  Nuevo: Endpoint de jugadores
@app.get("/players/{player_id}/stats")
async def player_stats(player_id: int):
    return get_player_stats(player_id)

#  Nuevo: Endpoint de partidos
@app.get("/matches/{match_id}/events")
async def match_events(match_id: int):
    return get_match_events(match_id)