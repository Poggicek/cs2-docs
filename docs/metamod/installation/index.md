# Installation

A simple guide on how to install Metamod:Source on a Source2 dedicated server

:::caution
Metamod is a mod loader with basic plugin API. It will not provide any functionality on its own.
:::

## Steps

1. Download the latest dev build from the [releases page](https://www.sourcemm.net/downloads.php/?branch=master)
2. Move the `addons` folder to your `game/csgo` folder
3. Edit `gameinfo.gi` in `game/csgo` and add `Game	csgo/addons/metamod` to the `SearchPaths` section

```diff
"GameInfo"
{
	game 		"Counter-Strike 2"
	title 		"Counter-Strike 2"
	title_pw	"E58F8DE68190E7B2BEE88BB1EFBC9AE585A8E79083E694BBE58ABF"

	LayeredOnMod	csgo_imported // Inherits the gameinfo.gi data from csgo_imported (which itself inherits from csgo_core)

	FileSystem
	{
		SearchPaths
		{
			Game_LowViolence	csgo_lv // Perfect World content override

+			Game	csgo/addons/metamod
			Game	csgo
			Game	csgo_imported
			Game	csgo_core
			Game	core
...
```

:::caution
Whenever CS2 updates you need to edit the `gameinfo.gi` file again as it is replaced with each update.
:::
