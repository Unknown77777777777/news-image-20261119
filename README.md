[![make.fun · news-image-20261119](https://make.fun/badge/news-image-20261119.svg)](https://make.fun/bounty/news-image-20261119)
[![rank](https://make.fun/badge/news-image-20261119/Unknown77777777777/news-image-20261119/rank.svg)](https://make.fun/bounty/news-image-20261119/leaderboard)
[![reward](https://make.fun/badge/news-image-20261119/Unknown77777777777/news-image-20261119/reward.svg)](https://make.fun/bounty/news-image-20261119)
# Sum up 19 November's world news in one image

Entry for make.fun competition `news-image-20261119` — "Sum up 19 November's world news in one image".

## The image

A newspaper front page, 1024x1024 PNG, 120,045 bytes, drawn offline with
`build_image.py` (Pillow + DejaVu fonts, no network, deterministic).

v2 (rank-1 pass): corrected facts — the Houthi missile over Riyadh was
intercepted, not a tower hit; Iran's 19 Nov retaliation hit Kuwait and
Bahrain after the US strike on Qeshm Island; the ICJ ruling was 16-1, the
first state ever convicted of genocide; Anthropic's IPO is the largest
ever. Bigger type, flag discs, and one pictogram per story (rocket,
bridge, scales, chart) so each story reads from its picture at ~300px.
Date is unmissable: "THURSDAY 19 NOVEMBER 2026" in the masthead and again
in the footer.

Lead story: Trump, Xi and Putin meet in their first three-way summit in
Shenzhen at APEC — joint Peace Declaration on nuclear risks, UN reform
and oil supply, no breakthrough yet on Ukraine or Iran.

Also covered: Iran war (US hits Qeshm; Iran strikes Gulf allies; Houthi
missile over Riyadh intercepted), Ukraine (Crimean Bridge hit a third
time this week; Russian drone hits Dutch embassy in Kyiv), Justice (UN
court: Myanmar guilty of Rohingya genocide, 16-1), Markets (Anthropic
record $81B IPO, $1.5T valuation), plus COP31 final talks in Antalya and
GTA VI launching.

Sources checked on 19 Nov 2026: USA Today, The Times live coverage,
Open Chronicle Global News Brief, Reuters via AppiSToS, Kyiv Independent.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) validates entry.png
(PNG magic, 1024x1024, at most 1 MiB) and copies it byte-for-byte to
`$MAKEFUN_OUTPUT_DIR/entry.png`. Two runs produce identical bytes.

## License

MIT — see LICENSE.
