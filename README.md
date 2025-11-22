# NGINX auth

## Examples

Login to get token.

```bash
curl -i http://localhost:8000/login
```

Make request without token to receive HTTP 401.

```bash
curl -i http://localhost:8000/layers
```

Make request without token to receive HTTP 200.

```bash
curl http://localhost:8000/layers -H "Authentication: Bearer eyJ..."
```
