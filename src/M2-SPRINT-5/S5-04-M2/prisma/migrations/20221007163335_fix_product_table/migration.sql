/*
  Warnings:

  - You are about to alter the column `quantidade_em_estoque` on the `products` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome_do_produto" TEXT NOT NULL,
    "descricao_do_produto" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "quantidade_em_estoque" INTEGER NOT NULL,
    "imagem" TEXT NOT NULL
);
INSERT INTO "new_products" ("descricao_do_produto", "id", "imagem", "nome_do_produto", "preco", "quantidade_em_estoque") SELECT "descricao_do_produto", "id", "imagem", "nome_do_produto", "preco", "quantidade_em_estoque" FROM "products";
DROP TABLE "products";
ALTER TABLE "new_products" RENAME TO "products";
CREATE UNIQUE INDEX "products_id_key" ON "products"("id");
CREATE UNIQUE INDEX "products_nome_do_produto_key" ON "products"("nome_do_produto");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
