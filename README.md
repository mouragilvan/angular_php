<h1>Comandos para rodar o projeto no Docker</h1>

<p>Após fazer o git clone do projeto, acesse a raiz do mesmo e execute os seguintes comandos:</p>

```
docker-compose build --no-cache
```
```
docker-compose up -d
```
```
docker container exec controle_vendas_php  composer install
```
```
docker container exec controle_vendas_php php artisan migrate:fresh --seed
```

<h2>Atenção!!! Considerações sobre o projeto</h2>

<p>Primeiramente, optei por fazer um projeto "na mão" sem usar nenhum framework/template de frontend, salvo o Bootstrap css.
Desta forma consigo demonstrar melhor meus conhecimentos, pois não faço uso de componentes prontos. Claro que em uma implementação mais robusta nós podemos sim fazer uso de temas como Fuse, Smart Admin e por aí vai.</p>

<p>
Também decidi pular etapas como autenticação e paginação de resultados por considerar que não são importantes para o escopo desta tarefa. Mas claro que, num futuro próximo, irei dar continuidade a este projeto incluindo mais coisas como estas.
</p>

