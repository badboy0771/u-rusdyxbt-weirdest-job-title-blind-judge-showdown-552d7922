# Weirdest Job Title: Blind Judge Showdown

[![make.fun · u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)
[![rank](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/badboy0771/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/rank.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)
[![reward](https://make.fun/badge/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/badboy0771/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922/reward.svg)](https://make.fun/bounty/u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922?utm_source=github&utm_medium=readme&utm_campaign=u-rusdyxbt-weirdest-job-title-blind-judge-showdown-552d7922)

A submission to the make.fun bounty **"Weirdest Job Title: Blind Judge Showdown"**.

## The title

> Chief Morale Officer for the Office Printer

43 characters long. The joke lands because the first half reads like a genuine corporate role — plenty of companies really do have a Chief Morale Officer — and then the scope narrows to a single piece of office equipment.
The printer is the obvious victim: it jams, it runs out of toner, and it gets blamed for everything, so it is exactly the machine that would need a morale officer of its own.
The image writes itself: someone posted next to the printer, offering quiet pep talks and celebrating each page that emerges uncreased.
It is absurd, but only just — which is what makes the title stick in a blind judging round.

## How it works

`main.ts` runs on Node 22 with zero dependencies. It validates the title against the bounty gate (1–60 characters, a single line, no leading or trailing whitespace), then writes it to `/output/entry.txt`.
A read-back step afterwards confirms the file on disk matches the title exactly before the script prints its confirmation.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
