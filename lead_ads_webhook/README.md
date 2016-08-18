## Lead Ads - Webhooks

Código exemplo que mostrar como criar um Webserver para receber leads em tempo real.

Sempre que um usuário envia um lead, para que o admin da página não precise baixar um csv com os novos dados de tempo em tempo, podemos criar uma integração que possibilitá esses dados serem enviados para um servidor, e uma ação mais rápida seja tomada.

## Sobre o código.

Criamos o código utilizando a ferramente [Hyperdev](https://hyperdev.com).

Para que você consiga utilizar o código sem receber nenhum erro, coloque o seu Facebook App ID no arquivo ./views/index.html no lugar da tag <APP_ID>.

Ex.:
Antes:
```
      appId      : '<APP_ID>',
```
Depois:
```
      appId      : '1234567890',
```

Feito isso, o código deve funcionar corretamente.

# Links

 * Video
    * https://www.facebook.com/groups/mktdevelopersbrasil/permalink/541893579330542/

 * Grupo para discusões de desenvolvimento
    * https://www.facebook.com/groups/mktdevelopersbrasil/

 * Documentação utilizada
    * https://developers.facebook.com/
    * https://developers.facebook.com/docs/graph-api/webhooks
    * https://developers.facebook.com/docs/marketing-api/guides/lead-ads/webhooks/v2.7

 * Servidor Utilizado
    * https://hyperdev.com/

 * Graph API Explore
    * https://developers.facebook.com/tools/explorer/

 * Códigos de exemplo e tutoriais:
    *  https://github.com/fbsamples/graph-api-webhooks-samples
    * https://developers.facebook.com/ads/blog/post/2015/12/18/webhooks-for-lead-ads-tutorial/
