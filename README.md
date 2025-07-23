⚠️ **Archiving notice:** `material-jekyll` was merged with `material-jekyll-plus` and moved to GitLab. For the latest code, see [`antoniomedeiros/material-jekyll`](https://gitlab.com/antoniomedeiros/material-jekyll).

Material site template for Jekyll
=================================

This is a site template for [Jekyll](http://jekyllrb.com) which lets you use the new [Google Material Design](http://www.google.com/design/spec/material-design/) in your favorite static site generator.

**Live demo:** https://vinyanalista.github.io/material-jekyll

It is built on top of the [Jekyll's default site template](https://github.com/jekyll/jekyll/tree/v2.5.3/lib/site_template) and the following excellent libraries:

- [jQuery](http://jquery.com/) (MIT License)
- [Bootstrap](http://getbootstrap.com/) (MIT License)
- [Material Design for Bootstrap](http://fezvrasta.github.io/bootstrap-material-design/) (MIT License)
- [Font Awesome](http://fontawesome.io) (SIL OFL 1.1 and MIT License)

This template comes out of the box with features desirable for any modern website, including:

- Responsiveness
- Site search (powered by [Google](https://www.google.com) and [OpenSearch](http://www.opensearch.org/))
- Favicons (made with [Favicon Generator](http://realfavicongenerator.net/))
- Social meta tags ([OpenGraph](http://ogp.me/), [Twitter Cards](https://dev.twitter.com/cards/overview) and [Schema.org](https://schema.org/))
- Integration to [Google Analytics](https://analytics.google.com/)
- Integration to [Google AdSense](https://www.google.com/adsense/)
- Comment system (powered by [Disqus](https://disqus.com/))
- Integration to social networks (powered by [AddThis](http://www.addthis.com))
- [Sitemaps.org](http://www.sitemaps.org/) compliant sitemap (powered by [jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap))

This template is out of the box compatible with [GitHub Pages](https://pages.github.com/) (in fact, the live demo itself is hosted on GitHub Pages). The only [Jekyll plugin](http://jekyllrb.com/docs/plugins/) it uses is the [Jekyll Sitemap Generator Plugin](https://github.com/jekyll/jekyll-sitemap), which is one of the [plugins supported by GitHub Pages](https://help.github.com/articles/using-jekyll-plugins-with-github-pages/).

## License

Material site template for Jekyll is fully open source and distributed under the [MIT License](https://github.com/vinyanalista/material-jekyll/blob/master/LICENSE). You can use it for commercial projects, open source projects, or really just about whatever you want.

Enjoy!

## Download

You may download Material site template for Jekyll [as a ZIP file](https://github.com/vinyanalista/material-jekyll/archive/master.zip).

Alternatively, if you are used to Git, you may [clone](https://help.github.com/articles/cloning-a-repository/) this template's repository.

If you are going to host your website on GitHub Pages, see the tips that follow.

### User or organization site

If you are going to use this template to start an [user or organization site](https://pages.github.com/#user-site), you may just [fork](https://help.github.com/articles/fork-a-repo/) this template's repository and rename your fork to `username.github.io` (or `organization.github.io`). Then, [clone](https://help.github.com/articles/cloning-a-repository/) your site's repository and start working on it:

```
$ git clone https://github.com/username/username.github.io
$ cd username.github.io
```

### Project site

If you are going to use this template to start a [project site](https://pages.github.com/#project-site), note that you need to host your project website in the same repository of your project, in a branch called `gh-pages`. I recommend you to add this template's repository as a [remote](https://help.github.com/articles/adding-a-remote/) in your project's local repository. Then, create a `gh-pages` branch in your project's repository and sync it with this template's repository `master` branch:

```
$ cd my-project-local-repo
$ git remote add site-template https://github.com/vinyanalista/material-jekyll.git
$ git pull site-template
$ git checkout --orphan gh-pages
$ git merge site-template/master
$ git push -u origin gh-pages
```

## Installation

Even if you already have Jekyll installed, I recommend you to use [Bundler](http://bundler.io/) to install and manage all dependencies of this template on Ruby gems. That assures you will always use the supported versions of the gems needed to build a website based on this template.

Summing up [Jekyll requirements](https://jekyllrb.com/docs/installation/#requirements) and Bundler, before you can actually use this template, you must have installed on your computer:

- Linux, Unix or Mac OS X (Jekyll [can be run on Windows](http://jekyll-windows.juthilo.com/), although [that is not officially supported](https://jekyllrb.com/docs/windows/))
- [Ruby](https://www.ruby-lang.org/) (including development headers)
- [RubyGems](https://rubygems.org/)
- [NodeJS](https://nodejs.org/)
- [Python 2.7](https://www.python.org/downloads/)

Note that Jekyll itself is not required to be previously installed, as it is going to be installed by Bundler.

Then, to make your computer ready to build a website based on this template, enter its folder and issue this command:

```
$ sh install.sh
```

The [`install.sh`](https://github.com/vinyanalista/material-jekyll/blob/master/install.sh) script is really just a shortcut. If you are not using Linux nor Git Bash, you can run:

```
bundle install
```

## Configuration

If you are impatient and just want to see a boilerplate Jekyll site based on this template up and running, you can skip configuration right now (default values are fine for a boilerplate site) ang go to the next step, where you will achieve what you want.

Following [Jekyll configuration](https://jekyllrb.com/docs/configuration/), all of this template's configuration (including configuration of the integrated features mentioned above) is done in the [`_config.yml`](https://github.com/vinyanalista/material-jekyll/blob/master/_config.yml) file. That file is well commented and is self-explanatory.

## Previewing your website locally

Jekyll has a built-in development server that allows you to preview what the generated site will look like in your browser locally. As we are using Bundler, we need to start it through Bundler.

Running the script [`serve.sh`](https://github.com/vinyanalista/material-jekyll/blob/master/serve.sh) saves you typing:

```
$ sh serve.sh
```

Alternatively, if you are not using Linux nor Git Bash, you can run:

```
bundle exec jekyll serve --host=0.0.0.0
```

Now browse to [http://localhost:4000](http://localhost:4000) and you should see your website live (just like [this](https://vinyanalista.github.io/material-jekyll)).

As you typed the argument `--host=0.0.0.0`, you can also [access your website from locally connected devices](http://stackoverflow.com/a/16608698), such as smartphones, just browsing to your computer's local IP (for example, [http://192.168.25.2:4000](http://192.168.25.2:4000)).

## Publishing your website

Before actually publishing your website, please ensure that at least the `url`and `baseurl` variables in the [`_config.yml`](https://github.com/vinyanalista/material-jekyll/blob/master/_config.yml) file are correctly set, otherwise your website may not function properly online. As an example, you can see [here](https://github.com/vinyanalista/material-jekyll/commit/d3d617d1763a2ba2810fd2829d59742dfeca3d03) how they were set for the [live demo site](https://vinyanalista.github.io/material-jekyll).

If you followed the above tips about GitHub pages, publishing your website is just a matter of pushing it's repository.

### User or organization site

After pushing, you will be able to access your site at [http://username.github.io/](http://username.github.io/).

### Project site

After pushing, you will be able to access your project site at [http://username.github.io/project](http://username.github.io/project).

## Fetching updates

You may update your code with eventual updates to the original template. Please note that after applying those updates to your code you may need to adjust it so it can work as expected.

If you followed the above tips about GitHub pages, here is how you can update your code.

### User or organization site

As your site is a fork of this template, to [sync your fork](https://help.github.com/articles/fork-a-repo/#keep-your-fork-synced) with this template, you first need, if you haven't done yet, to add this template's repository as a [remote](https://help.github.com/articles/adding-a-remote/) in your site's local repository:

```
$ cd username.github.io
$ git remote add site-template https://github.com/vinyanalista/material-jekyll.git
```

That needs to be done just once.

Then, sync your local clone of this template's repository:

```
$ git pull site-template
```

Finally, sync your site's repository `master` branch with this template's repository `master` branch:

```
$ git merge site-template/master
```

### Project site

First, sync your local clone of this template's repository. Then, sync this template's repository `master` branch with your project's repository `gh-pages` branch:

```
$ cd my-project-local-repo
$ git pull site-template
$ git checkout gh-pages
$ git merge site-template/master
```
