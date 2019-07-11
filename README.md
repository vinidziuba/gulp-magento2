# Gulp para magento 2 



## 1. Clone os arquivos do repositório
      
     
```
git clone https://github.com/vinidziuba/gulp-magento2.git
```


## 2. Instalação de arquivos no projeto magento 2


* Mova o arquivo <strong>gruntfile.js</strong> na pasta raiz do projeto.

* Substitua o arquivo <strong>package.json</strong> na raiz do projeto pelo do repositório.

* Mova a pasta <em>gulp</em> para dentro de <strong>app/dev/tools</strong>.

* Dentro da pasta do projeto rode o comando <code> npm install </code>.

* Rode o comando <code> gulp -v </code><br>

  <strong>Retorno :</strong><br>
<code>CLI version: 2.2.0 <br>
Local version: 4.0.2</code>

## 3. Configuração de arquivos do gulp

* Em <strong>app/dev/tools/gulp/configs/themes.js</strong> coloque as informações necessarias do seu tema:

	<strong>Por exemplo :</strong>

```javascript
module.exports = {
  "Hibrido": {
    "locale": "pt_BR",
    "lang": "less",
    "area": "frontend",
    "vendor": "Hibrido",
    "name": "default",
    "files": [
      "css/styles-m",
      "css/styles-l"
    ]
  }
};
```
* Em seguida vá em <strong>app/dev/tools/gulp/browser-sync.js</strong> e altere conforme o seu projeto esta configurado no seu servidor local com o apache2, nginx, entre outros .
Por Exemplo:

```javascript
module.exports = {
    proxy: "magento2.localhost"
}

```


* Agora rode o seguinte comando 

<code>bin/magento dev:source-theme:deploy --theme [Vendor/first theme] --locale [ex:en_US]</code>

   <strong>	     Exemplo:
</strong>
<code>bin/magento dev:source-theme:deploy --theme Hibrido/default --locale pt_BR 
</code>

## 4 Execute o gulp

* Execute o comando <code>gulp theme</code> .

	Alguns comandos adicionais
	
	* <code>gulp less [--Theme-name]</code>
	* <code>gulp watch [--Theme-name]</code>
	* <code>gulp deploy [--Theme-name]</code>
	* <code>gulp clean-cache [--Theme-name]</code>
	* <code>gulp clean-static [--Theme-name]</code>
	* <code>gulp browser-sync [--Theme-name]</code>
