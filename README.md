# factorio-abbreviate-number

This is a Deno library for abbreviating numbers in the style Factorio does.

Numbers are abbreviated with a suffix for the order of magnitude (k, M, G) if
they're great enough. One fraction digit is only shown if there are fewer than 2
digits and the number has a suffix or a fractional part.

| Number      | Abbreviation |
| ----------- | ------------ |
| 1           | 1            |
| 19          | 19           |
| 199         | 199          |
| 200         | 200          |
| 1999        | 1.9k         |
| 2000        | 2.0k         |
| 19999       | 19k          |
| 20000       | 20k          |
| 199999      | 199k         |
| 1999999     | 1.9M         |
| 19999999    | 19M          |
| 199999999   | 199M         |
| 1999999999  | 1.9G         |
| 19999999999 | 19G          |
| 0.99        | 0.9          |
| 1.9         | 1.9          |
| 1.99        | 1.9          |
