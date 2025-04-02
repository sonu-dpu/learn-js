docker pull ollama/ollama
docker run -d --name ollama -p 11434:11434 ollama/ollama
docker exec -it ollama ollama pull mistral
curl -X POST http://localhost:11434/api/generate -d '{
>   "model": "mistral",
>   "prompt": "What is AI?",
>   "stream": false
> }'