# `@readme/rdme-plugin-template`

An example plugin for [the `rdme` CLI](https://github.com/readmeio/rdme).

# Usage

```sh
npm install rdme -g
rdme plugins install @readme/rdme-plugin-template
rdme hello world
```

# Local Development

1. Clone both this and the [`rdme`](https://github.com/readmeio/rdme) repositories.

2. In the `rdme` repository, run the following:

```sh
npm ci
bin/dev.js plugins link ../rdme-plugin-template # this is assuming both clones are in the same parent directory
bin/dev.js hello world
```

# Further Reading

This plugin setup is powered by [`oclif`](https://oclif.io/). The following links contain more information about `oclif` plugins:

- https://github.com/oclif/plugin-plugins
- https://oclif.io/docs/plugins
- https://oclif.io/docs/plugin_loading
