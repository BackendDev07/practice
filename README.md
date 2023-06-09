# Products CRUD

```bash
npm init
...
npm i typescript -D
...
npx tsc --init
...
npm i nodemon
...
npm i express cors node-json-db
...
npm i @types/express @types/cors -D
```

Product type

```ts
type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
};
```

---

## Endpoint - `/product`

GET `/product`

Response

```json

    {
        "message": "All Products",

        "products": [...]
    }
```

---

POST `/product`

Request

```json
{
  "title": "new title",
  "description": "desc",
  "price": 2000
}
```

Response

```json
{
  "message": "Created",
  "product": {
    "id": 2,
    "title": "new title",
    "description": "desc",
    "price": 2000
  }
}
```

---

PUT `product/:id`

Request

```json
{
  "title": "new title",
  "description": "desc",
  "price": 2000
}
```

Response

```json
{
  "message": "Updated",
  "product": {
    "id": 2,
    "title": "new title",
    "description": "desc",
    "price": 2000
  }
}
```

---

DELETE `/product/:id`

Response

```json
{
  "message": "Deleted",
  "productId": 2
}
```
