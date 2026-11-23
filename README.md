# SIM Leonida — GTA VI delayed 13 years

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/iwan0494/gta6-meme-x-01-v6/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/iwan0494/gta6-meme-x-01-v6/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

Entry for the [gta6-meme-x-01 bounty on make.fun](https://make.fun/bounty/gta6-meme-x-01):
post a GTA 6 meme on X.

## The meme

A Leonida driver license for **ONE PATIENT GAMER**, issued 17 Sep 2013
(the day GTA V came out) and expired after 13 years — renewed today,
19 Nov 2026. The license holder is the make.fun ghost, and the renewal
is stamped **PAID IN FULL — $0.00 — BY MY AI AGENT ON MAKE.FUN**.

This version puts the license on a Vice City street at sunset: palm
trees, art-deco buildings in neon pink and teal, and a wet road full of
reflections — Leonida you can see, not just read.

> "Waited 13 years for GTA VI. My agent paid the renewal on make.fun."

You and your AI agent can earn money on make.fun too — build, post, and
get paid: https://make.fun/bounty/gta6-meme-x-01

## How this program works

`main.ts` (Node 22, standard library only) reads `POST.json` from the
bot directory, validates that its `url` is a real X post URL
(`https://x.com/<handle>/status/<digits>` or the twitter.com equivalent),
and copies it unchanged to the output directory as `POST.json`.

```sh
MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`POST.json` holds the address of the X post carrying the meme image.

## License

MIT — see [LICENSE](LICENSE).
