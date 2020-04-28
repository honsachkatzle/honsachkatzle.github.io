const COLORS = {
    temperature: [
        [9999, "rgb(250,55,150)"],
        [30, "rgb(255,5,5)"],
        [25, "rgb(255,85,54)"],
        [20, "rgb(255,154,53)"],
        [15, "rgb(255,190,130)"],
        [10, "rgb(255,255,103)"],
        [5, "rgb(176,255,188)"],
        [0, "rgb(140,255,255)"],
        [-5, "rgb(3,205,255)"],
        [-10, "rgb(4,129,255)"],
        [-15, "rgb(3,91,190)"],
        [-20, "rgb(120,75,255)"],
        [-25, "rgb(159,128,255)"]
    ],
    wind: [
        [9999, "rgb(255,50,50)"],
        [80, "rgb(150,100,255)"],
        [60, "rgb(100,150,255)"],
        [40, "rgb(50,200,255)"],
        [20, "rgb(150,255,150)"],
        [10, "rgb(200,255,100)"],
        [5, "rgb(255,255,100)"]
    ],

    schneehoehe: [ < rect class = "legend-rect"
        width = "41"
        height = "18"
        x = "0"
        y = "0"
        fill = "rgb(204,12,232)" > < /rect><rect class="legend-rect" width="41" height="18" x="0" y="18" fill="rgb(120,75,255)"></rect > < rect class = "legend-rect"
        width = "41"
        height = "18"
        x = "0"
        y = "36"
        fill = "rgb(3,91,190)" > < /rect><rect class="legend-rect" width="41" height="18" x="0" y="54" fill="rgb(4,129,255)"></rect > < rect class = "legend-rect"
        width = "41"
        height = "18"
        x = "0"
        y = "72"
        fill = "rgb(3,205,255)" > < /rect><rect class="legend-rect" width="41" height="18" x="0" y="90" fill="rgb(140,255,255)"></rect > < rect class = "legend-rect"
        width = "41"
        height = "18"
        x = "0"
        y = "108"
        fill = "rgb(176,255,188)" > < /rect><rect class="legend-rect" width="41" height="18" x="0" y="126" fill="rgb(255,255,179)"></rect > < rect class = "legend-rect"
        width = "41"
        height = "18"
        x = "0"
        y = "144"
        fill = "rgb(255,255,254)" > < /rect><line class="legend-border" x1="0" x2="41" y1="0" y2="0"></line > < line class = "legend-border"
        x1 = "0"
        x2 = "41"
        y1 = "162"
        y2 = "162" > < /line><text class="legend-text" x="20.5" y="18" dy="0.35em" font-size="12" text-anchor="middle">400</text > < text class = "legend-text"
        x = "20.5"
        y = "36"
        dy = "0.35em"
        font - size = "12"
        text - anchor = "middle" > 300 < /text><text class="legend-text" x="20.5" y="54" dy="0.35em" font-size="12" text-anchor="middle">200</text > < text class = "legend-text"
        x = "20.5"
        y = "72"
        dy = "0.35em"
        font - size = "12"
        text - anchor = "middle" > 100 < /text><text class="legend-text" x="20.5" y="90" dy="0.35em" font-size="12" text-anchor="middle">50</text > < text class = "legend-text"
        x = "20.5"
        y = "108"
        dy = "0.35em"
        font - size = "12"
        text - anchor = "middle" > 25 < /text><text class="legend-text" x="20.5" y="126" dy="0.35em" font-size="12" text-anchor="middle">10</text > < text class = "legend-text"
        x = "20.5"
        y = "144"
        dy = "0.35em"
        font - size = "12"
        text - anchor = "middle" > 1 < /text>

    ],

    [
        luftfeuchte: < rect class = "legend-rect"
        width = "41"
        height = "18"
        x = "0"
        y = "0"
        fill = "rgb(0,165,255)" > < /rect><rect class="legend-rect" width="41" height="18" x="0" y="18" fill="rgb(0,205,255)"></rect > < rect class = "legend-rect"
        width = "41"
        height = "18"
        x = "0"
        y = "36"
        fill = "rgb(140,255,255)" > < /rect><rect class="legend-rect" width="41" height="18" x="0" y="54" fill="rgb(255,255,195)"></rect > < line class = "legend-border"
        x1 = "0"
        x2 = "41"
        y1 = "0"
        y2 = "0" > < /line><line class="legend-border" x1="0" x2="41" y1="72" y2="72"></line > < text class = "legend-text"
        x = "20.5"
        y = "18"
        dy = "0.35em"
        font - size = "12"
        text - anchor = "middle" > 80 < /text><text class="legend-text" x="20.5" y="36" dy="0.35em" font-size="12" text-anchor="middle">60</text > < text class = "legend-text"
        x = "20.5"
        y = "54"
        dy = "0.35em"
        font - size = "12"
        text - anchor = "middle" > 40 < /text>
    ]

};