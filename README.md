# factorio-abbreviate-number

This is a Deno library for abbreviating numbers in the style Factorio does.

Numbers are abbreviated with a suffix for the order of magnitude (k, M, G) if
they're great enough. One fraction digit is only shown if there are fewer than 2
digits and the number has a suffix or a fractional part.
