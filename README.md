# Google maps scraper

## Usage

```
docker compose build && docker compose up
```

results will be shown in `output/{query}.(csv|json)`

## Config

in `src/config.py`

```python
queries = [
    {
        "keyword": "Containers in brussel",
        "max_results": 30
    },
]
```