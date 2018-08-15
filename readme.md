# ecoprint-cli 

> CLI for ecoprint

## Install

```
$ npm install --global ecoprint-cli
```

## Usage

```
$ ecoprint --help

  Examples
    $ ecoprint --list
		Available products:
			Bread
			Lamb
			...

    $ ecoprint lamb
		Ecological ecoprint of 1kg of lamb:
			Co2 cost (in kg): 39.2
			Water cost (in liters): 8763

		$ ecoprint lamb fruit
		Ecological ecoprint of lamb compared with fruit:
			Co2 cost relation: 
				1 kg of lamb costs the same as 35.64 kg of fruit.
			Water cost relation: 
				1 kg of lamb costs the same as 9.11 kg of fruit.

  Options
    --all  Get all available products to get the footprint of.
```

## Related

- [ecoprint](https://github.com/vikepic/ecoprint) - API for this module

## License

MIT © [vikepic](https://vikepic.github.io)
