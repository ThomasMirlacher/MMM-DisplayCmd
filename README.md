# MMM-DisplayCmd
This a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror). It displays the output of a command line command.

## Preview

## Installation

1. Enter module-directory: `cd ~/MagicMirror/modules`
2. Clone repository: `git clone https://github.com/ThomasMirlacher/MMM-DisplayCmd`
3. Enter new directory: `cd ~/MagicMirror/modules/MMM-DisplayCmd`
3. Install module: `npm install`

## Integration

Add module information to your `~/MagicMirror/config/config.js`.

Here are examples an entry in `config.js`:
```
{
	module: 'MMM-DisplayCmd',
	position: 'bottom_left',
	cmd: '/usr/games/fortune -n 200 -s',
},
```

```
{
	module: 'MMM-DisplayCmd',
	position: 'bottom_left',
	cmd: '/usr/bin/uptime',
	updateInterval: 60,	// update every 60s
},
```

## Special Thanks
- [Michael Teeuw](https://github.com/MichMich) for creating the genius [MagicMirror²](https://github.com/MichMich/MagicMirror/tree/develop) project that made this module possible.
