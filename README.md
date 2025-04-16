# `@readme/rdme-plugin-template`

A new CLI generated with oclif

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g @readme/rdme-plugin-template
$ example-bin COMMAND
running command...
$ example-bin (--version)
@readme/rdme-plugin-template/0.0.0 darwin-arm64 node-v20.19.0
$ example-bin --help [COMMAND]
USAGE
  $ example-bin COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`example-bin hello PERSON`](#example-bin-hello-person)
- [`example-bin hello world`](#example-bin-hello-world)
- [`example-bin help [COMMAND]`](#example-bin-help-command)
- [`example-bin plugins`](#example-bin-plugins)
- [`example-bin plugins add PLUGIN`](#example-bin-plugins-add-plugin)
- [`example-bin plugins:inspect PLUGIN...`](#example-bin-pluginsinspect-plugin)
- [`example-bin plugins install PLUGIN`](#example-bin-plugins-install-plugin)
- [`example-bin plugins link PATH`](#example-bin-plugins-link-path)
- [`example-bin plugins remove [PLUGIN]`](#example-bin-plugins-remove-plugin)
- [`example-bin plugins reset`](#example-bin-plugins-reset)
- [`example-bin plugins uninstall [PLUGIN]`](#example-bin-plugins-uninstall-plugin)
- [`example-bin plugins unlink [PLUGIN]`](#example-bin-plugins-unlink-plugin)
- [`example-bin plugins update`](#example-bin-plugins-update)

## `example-bin hello PERSON`

Say hello

```
USAGE
  $ example-bin hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ example-bin hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/readmeio/rdme-plugin-template/blob/v0.0.0/src/commands/hello/index.ts)_

## `example-bin hello world`

Say hello world

```
USAGE
  $ example-bin hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ example-bin hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/readmeio/rdme-plugin-template/blob/v0.0.0/src/commands/hello/world.ts)_

## `example-bin help [COMMAND]`

Display help for example-bin.

```
USAGE
  $ example-bin help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for example-bin.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.27/src/commands/help.ts)_

## `example-bin plugins`

List installed plugins.

```
USAGE
  $ example-bin plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ example-bin plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/index.ts)_

## `example-bin plugins add PLUGIN`

Installs a plugin into example-bin.

```
USAGE
  $ example-bin plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into example-bin.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the EXAMPLE_BIN_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the EXAMPLE_BIN_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ example-bin plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ example-bin plugins add myplugin

  Install a plugin from a github url.

    $ example-bin plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ example-bin plugins add someuser/someplugin
```

## `example-bin plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ example-bin plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ example-bin plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/inspect.ts)_

## `example-bin plugins install PLUGIN`

Installs a plugin into example-bin.

```
USAGE
  $ example-bin plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into example-bin.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the EXAMPLE_BIN_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the EXAMPLE_BIN_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ example-bin plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ example-bin plugins install myplugin

  Install a plugin from a github url.

    $ example-bin plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ example-bin plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/install.ts)_

## `example-bin plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ example-bin plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ example-bin plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/link.ts)_

## `example-bin plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ example-bin plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ example-bin plugins unlink
  $ example-bin plugins remove

EXAMPLES
  $ example-bin plugins remove myplugin
```

## `example-bin plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ example-bin plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/reset.ts)_

## `example-bin plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ example-bin plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ example-bin plugins unlink
  $ example-bin plugins remove

EXAMPLES
  $ example-bin plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/uninstall.ts)_

## `example-bin plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ example-bin plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ example-bin plugins unlink
  $ example-bin plugins remove

EXAMPLES
  $ example-bin plugins unlink myplugin
```

## `example-bin plugins update`

Update installed plugins.

```
USAGE
  $ example-bin plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.36/src/commands/plugins/update.ts)_

<!-- commandsstop -->
