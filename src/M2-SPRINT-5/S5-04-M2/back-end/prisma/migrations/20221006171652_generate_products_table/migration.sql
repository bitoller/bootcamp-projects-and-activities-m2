-- CreateTable
CREATE TABLE "products" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome_do_produto" TEXT NOT NULL,
    "descricao_do_produto" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "quantidade_em_estoque" BIGINT NOT NULL,
    "imagem" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "products_id_key" ON "products"("id");

-- CreateIndex
CREATE UNIQUE INDEX "products_nome_do_produto_key" ON "products"("nome_do_produto");
