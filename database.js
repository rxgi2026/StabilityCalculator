// database.js
// Estimated Reference Values for IGF-1 (ng/mL)
// These arrays contain discrete values for each age from 0 to 21.
// Chart.js will use bicubic interpolation (tension) to smooth these points on the graph.
// Clinical SDS MUST use proprietary LMS transformations provided by the specific assay manufacturer.

const referenceData = {
    "roche": {
        "male": [
            { age: 0, lower: 11.8, upper: 94.6 },
            { age: 1, lower: 11.8, upper: 96.4 },
            { age: 2, lower: 13.9, upper: 104.0 },
            { age: 3, lower: 18.9, upper: 116.0 },
            { age: 4, lower: 26.8, upper: 134.0 },
            { age: 5, lower: 36.6, upper: 156.0 },
            { age: 6, lower: 47.1, upper: 184.0 },
            { age: 7, lower: 57.5, upper: 216.0 },
            { age: 8, lower: 67.5, upper: 254.0 },
            { age: 9, lower: 76.9, upper: 296.0 },
            { age: 10, lower: 85.7, upper: 343.0 },
            { age: 11, lower: 93.9, upper: 392.0 },
            { age: 12, lower: 101.0, upper: 434.0 },
            { age: 13, lower: 108.0, upper: 467.0 },
            { age: 14, lower: 115.0, upper: 489.0 },
            { age: 15, lower: 120.0, upper: 501.0 },
            { age: 16, lower: 125.0, upper: 503.0 },
            { age: 17, lower: 129.0, upper: 495.0 },
            { age: 18, lower: 132.0, upper: 476.0 },
            { age: 19, lower: 134.0, upper: 450.0 },
            { age: 20, lower: 136.0, upper: 421.0 },
            { age: 21, lower: 137.0, upper: 394.0 }
        ],
        "female": [
            { age: 0, lower: 15.4, upper: 92.0 },
            { age: 1, lower: 18.7, upper: 104.0 },
            { age: 2, lower: 26.1, upper: 128.0 },
            { age: 3, lower: 34.2, upper: 155.0 },
            { age: 4, lower: 43.2, upper: 185.0 },
            { age: 5, lower: 53.0, upper: 216.0 },
            { age: 6, lower: 63.6, upper: 250.0 },
            { age: 7, lower: 75.0, upper: 286.0 },
            { age: 8, lower: 87.3, upper: 324.0 },
            { age: 9, lower: 99.9, upper: 363.0 },
            { age: 10, lower: 112.0, upper: 398.0 },
            { age: 11, lower: 123.0, upper: 427.0 },
            { age: 12, lower: 132.0, upper: 451.0 },
            { age: 13, lower: 140.0, upper: 468.0 },
            { age: 14, lower: 146.0, upper: 480.0 },
            { age: 15, lower: 151.0, upper: 485.0 },
            { age: 16, lower: 154.0, upper: 485.0 },
            { age: 17, lower: 156.0, upper: 479.0 },
            { age: 18, lower: 156.0, upper: 466.0 },
            { age: 19, lower: 155.0, upper: 449.0 },
            { age: 20, lower: 152.0, upper: 429.0 },
            { age: 21, lower: 148.0, upper: 410.0 }
        ]
    },

    "mediagnost": {
        "male": [
            { age: 0, lower: 28, upper: 156 },
            { age: 1, lower: 28, upper: 156 },
            { age: 2, lower: 40, upper: 189 },
            { age: 3, lower: 40, upper: 189 },
            { age: 4, lower: 50, upper: 233 },
            { age: 5, lower: 50, upper: 233 },
            { age: 6, lower: 62, upper: 248 },
            { age: 7, lower: 78, upper: 281 },
            { age: 8, lower: 90, upper: 284 },
            { age: 9, lower: 102, upper: 304 },
            { age: 10, lower: 117, upper: 305 },
            { age: 11, lower: 129, upper: 339 },
            { age: 12, lower: 141, upper: 419 },
            { age: 13, lower: 179, upper: 540 },
            { age: 14, lower: 229, upper: 691 },
            { age: 15, lower: 269, upper: 697 },
            { age: 16, lower: 267, upper: 673 },
            { age: 17, lower: 243, upper: 527 },
            { age: 18, lower: 235, upper: 512 },
            { age: 19, lower: 220, upper: 471 },
            { age: 20, lower: 115, upper: 340 },
            { age: 21, lower: 115, upper: 340 }
        ],
        "female": [
            { age: 0, lower: 28, upper: 156 },
            { age: 1, lower: 28, upper: 156 },
            { age: 2, lower: 40, upper: 189 },
            { age: 3, lower: 40, upper: 189 },
            { age: 4, lower: 50, upper: 233 },
            { age: 5, lower: 50, upper: 233 },
            { age: 6, lower: 62, upper: 248 },
            { age: 7, lower: 78, upper: 281 },
            { age: 8, lower: 99, upper: 376 },
            { age: 9, lower: 114, upper: 369 },
            { age: 10, lower: 134, upper: 426 },
            { age: 11, lower: 160, upper: 581 },
            { age: 12, lower: 201, upper: 707 },
            { age: 13, lower: 256, upper: 716 },
            { age: 14, lower: 284, upper: 713 },
            { age: 15, lower: 279, upper: 700 },
            { age: 16, lower: 270, upper: 660 },
            { age: 17, lower: 246, upper: 533 },
            { age: 18, lower: 233, upper: 499 },
            { age: 19, lower: 220, upper: 471 },
            { age: 20, lower: 115, upper: 340 },
            { age: 21, lower: 115, upper: 340 }
        ]
    },

    "mediagnost_ria": {
        "male": [
            { age: 0, lower: 28, upper: 156 },
            { age: 1, lower: 28, upper: 156 },
            { age: 2, lower: 40, upper: 189 },
            { age: 3, lower: 40, upper: 189 },
            { age: 4, lower: 50, upper: 233 },
            { age: 5, lower: 50, upper: 233 },
            { age: 6, lower: 62, upper: 248 },
            { age: 7, lower: 78, upper: 281 },
            { age: 8, lower: 90, upper: 284 },
            { age: 9, lower: 102, upper: 304 },
            { age: 10, lower: 117, upper: 305 },
            { age: 11, lower: 129, upper: 339 },
            { age: 12, lower: 141, upper: 419 },
            { age: 13, lower: 179, upper: 540 },
            { age: 14, lower: 229, upper: 691 },
            { age: 15, lower: 269, upper: 697 },
            { age: 16, lower: 267, upper: 673 },
            { age: 17, lower: 243, upper: 527 },
            { age: 18, lower: 235, upper: 512 },
            { age: 19, lower: 220, upper: 471 },
            { age: 20, lower: 115, upper: 340 },
            { age: 21, lower: 115, upper: 340 }
        ],
        "female": [
            { age: 0, lower: 28, upper: 156 },
            { age: 1, lower: 28, upper: 156 },
            { age: 2, lower: 40, upper: 189 },
            { age: 3, lower: 40, upper: 189 },
            { age: 4, lower: 50, upper: 233 },
            { age: 5, lower: 50, upper: 233 },
            { age: 6, lower: 62, upper: 248 },
            { age: 7, lower: 78, upper: 281 },
            { age: 8, lower: 99, upper: 376 },
            { age: 9, lower: 114, upper: 369 },
            { age: 10, lower: 134, upper: 426 },
            { age: 11, lower: 160, upper: 581 },
            { age: 12, lower: 201, upper: 707 },
            { age: 13, lower: 256, upper: 716 },
            { age: 14, lower: 284, upper: 713 },
            { age: 15, lower: 279, upper: 700 },
            { age: 16, lower: 270, upper: 660 },
            { age: 17, lower: 246, upper: 533 },
            { age: 18, lower: 233, upper: 499 },
            { age: 19, lower: 220, upper: 471 },
            { age: 20, lower: 115, upper: 340 },
            { age: 21, lower: 115, upper: 340 }
        ]
    },

    "liaison": {
        "male": [
            { age: 0, lower: 11, upper: 100 },
            { age: 1, lower: 12, upper: 120 },
            { age: 2, lower: 13, upper: 143 },
            { age: 3, lower: 14, upper: 169 },
            { age: 4, lower: 15, upper: 200 },
            { age: 5, lower: 16, upper: 233 },
            { age: 6, lower: 17, upper: 269 },
            { age: 7, lower: 18, upper: 307 },
            { age: 8, lower: 20, upper: 347 },
            { age: 9, lower: 23, upper: 386 },
            { age: 10, lower: 29, upper: 424 },
            { age: 11, lower: 37, upper: 459 },
            { age: 12, lower: 49, upper: 487 },
            { age: 13, lower: 64, upper: 508 },
            { age: 14, lower: 83, upper: 519 },
            { age: 15, lower: 102, upper: 520 },
            { age: 16, lower: 119, upper: 511 },
            { age: 17, lower: 131, upper: 490 },
            { age: 18, lower: 137, upper: 461 },
            { age: 19, lower: 137, upper: 428 },
            { age: 20, lower: 133, upper: 395 },
            { age: 21, lower: 127, upper: 364 }
        ],
        "female": [
            { age: 0, lower: 8, upper: 131 },
            { age: 1, lower: 9, upper: 146 },
            { age: 2, lower: 11, upper: 165 },
            { age: 3, lower: 13, upper: 187 },
            { age: 4, lower: 15, upper: 216 },
            { age: 5, lower: 19, upper: 251 },
            { age: 6, lower: 24, upper: 293 },
            { age: 7, lower: 30, upper: 342 },
            { age: 8, lower: 39, upper: 396 },
            { age: 9, lower: 49, upper: 451 },
            { age: 10, lower: 62, upper: 504 },
            { age: 11, lower: 76, upper: 549 },
            { age: 12, lower: 90, upper: 581 },
            { age: 13, lower: 104, upper: 596 },
            { age: 14, lower: 115, upper: 591 },
            { age: 15, lower: 121, upper: 564 },
            { age: 16, lower: 122, upper: 524 },
            { age: 17, lower: 120, upper: 479 },
            { age: 18, lower: 117, upper: 436 },
            { age: 19, lower: 113, upper: 399 },
            { age: 20, lower: 109, upper: 372 },
            { age: 21, lower: 107, upper: 351 }
        ]
    },

    "isys": {
        "male": [
            { age: 0, lower: 27.0, upper: 157.0 },
            { age: 1, lower: 29.7, upper: 166.8 },
            { age: 2, lower: 33.9, upper: 183.9 },
            { age: 3, lower: 39.0, upper: 204.5 },
            { age: 4, lower: 44.3, upper: 225.0 },
            { age: 5, lower: 50.0, upper: 245.5 },
            { age: 6, lower: 56.2, upper: 267.1 },
            { age: 7, lower: 63.4, upper: 291.9 },
            { age: 8, lower: 72.4, upper: 323.1 },
            { age: 9, lower: 83.6, upper: 361.6 },
            { age: 10, lower: 96.9, upper: 406.6 },
            { age: 11, lower: 111.6, upper: 454.4 },
            { age: 12, lower: 126.1, upper: 498.7 },
            { age: 13, lower: 138.6, upper: 532.5 },
            { age: 14, lower: 147.5, upper: 551.2 },
            { age: 15, lower: 152.2, upper: 553.5 },
            { age: 16, lower: 152.9, upper: 541.8 },
            { age: 17, lower: 150.6, upper: 520.6 },
            { age: 18, lower: 146.2, upper: 493.6 },
            { age: 19, lower: 140.2, upper: 462.7 },
            { age: 20, lower: 133.1, upper: 430.0 },
            { age: 21, lower: 115.2, upper: 354.8 }
        ],
        "female": [
            { age: 0, lower: 17.9, upper: 125.6 },
            { age: 1, lower: 19.5, upper: 132.3 },
            { age: 2, lower: 22.2, upper: 145.4 },
            { age: 3, lower: 25.9, upper: 164.2 },
            { age: 4, lower: 30.7, upper: 187.8 },
            { age: 5, lower: 36.2, upper: 214.4 },
            { age: 6, lower: 42.0, upper: 240.4 },
            { age: 7, lower: 48.6, upper: 269.6 },
            { age: 8, lower: 56.9, upper: 305.3 },
            { age: 9, lower: 67.2, upper: 349.4 },
            { age: 10, lower: 79.5, upper: 400.3 },
            { age: 11, lower: 92.6, upper: 452.6 },
            { age: 12, lower: 105.3, upper: 499.1 },
            { age: 13, lower: 115.9, upper: 533.4 },
            { age: 14, lower: 123.4, upper: 552.0 },
            { age: 15, lower: 127.4, upper: 554.2 },
            { age: 16, lower: 127.9, upper: 541.5 },
            { age: 17, lower: 125.3, upper: 517.3 },
            { age: 18, lower: 120.5, upper: 485.8 },
            { age: 19, lower: 114.4, upper: 450.8 },
            { age: 20, lower: 107.8, upper: 416.0 },
            { age: 21, lower: 92.9, upper: 342.0 }
        ]
    },

    "immulite_pre": {
        "male": [
            { age: 0, lower: 30, upper: 165 },
            { age: 1, lower: 35, upper: 178 },
            { age: 2, lower: 40, upper: 195 },
            { age: 3, lower: 45, upper: 215 },
            { age: 4, lower: 52, upper: 240 },
            { age: 5, lower: 58, upper: 265 },
            { age: 6, lower: 65, upper: 295 },
            { age: 7, lower: 75, upper: 325 },
            { age: 8, lower: 86, upper: 360 },
            { age: 9, lower: 100, upper: 405 },
            { age: 10, lower: 115, upper: 455 },
            { age: 11, lower: 135, upper: 512 },
            { age: 12, lower: 155, upper: 565 },
            { age: 13, lower: 175, upper: 615 },
            { age: 14, lower: 190, upper: 650 },
            { age: 15, lower: 198, upper: 665 },
            { age: 16, lower: 195, upper: 655 },
            { age: 17, lower: 185, upper: 620 },
            { age: 18, lower: 195, upper: 537 },
            { age: 19, lower: 195, upper: 537 },
            { age: 20, lower: 195, upper: 537 },
            { age: 21, lower: 171, upper: 477 }
        ],
        "female": [
            { age: 0, lower: 22, upper: 145 },
            { age: 1, lower: 25, upper: 155 },
            { age: 2, lower: 28, upper: 170 },
            { age: 3, lower: 33, upper: 190 },
            { age: 4, lower: 40, upper: 218 },
            { age: 5, lower: 48, upper: 248 },
            { age: 6, lower: 56, upper: 282 },
            { age: 7, lower: 66, upper: 322 },
            { age: 8, lower: 78, upper: 368 },
            { age: 9, lower: 92, upper: 422 },
            { age: 10, lower: 110, upper: 485 },
            { age: 11, lower: 130, upper: 552 },
            { age: 12, lower: 150, upper: 615 },
            { age: 13, lower: 166, upper: 658 },
            { age: 14, lower: 175, upper: 678 },
            { age: 15, lower: 178, upper: 675 },
            { age: 16, lower: 175, upper: 655 },
            { age: 17, lower: 168, upper: 620 },
            { age: 18, lower: 180, upper: 586 },
            { age: 19, lower: 180, upper: 586 },
            { age: 20, lower: 180, upper: 586 },
            { age: 21, lower: 166, upper: 541 }
        ]
    },

    "immulite_post": {
        "male": [
            { age: 0, lower: 15, upper: 129 },
            { age: 1, lower: 15, upper: 129 },
            { age: 2, lower: 15, upper: 129 },
            { age: 3, lower: 15, upper: 129 },
            { age: 4, lower: 22, upper: 208 },
            { age: 5, lower: 22, upper: 208 },
            { age: 6, lower: 22, upper: 208 },
            { age: 7, lower: 40, upper: 255 },
            { age: 8, lower: 40, upper: 255 },
            { age: 9, lower: 40, upper: 255 },
            { age: 10, lower: 69, upper: 316 },
            { age: 11, lower: 69, upper: 316 },
            { age: 12, lower: 143, upper: 506 },
            { age: 13, lower: 143, upper: 506 },
            { age: 14, lower: 177, upper: 507 },
            { age: 15, lower: 177, upper: 507 },
            { age: 16, lower: 173, upper: 414 },
            { age: 17, lower: 173, upper: 414 },
            { age: 18, lower: 173, upper: 414 },
            { age: 19, lower: 117, upper: 323 },
            { age: 20, lower: 117, upper: 323 },
            { age: 21, lower: 117, upper: 323 }
        ],
        "female": [
            { age: 0, lower: 18, upper: 172 },
            { age: 1, lower: 18, upper: 172 },
            { age: 2, lower: 18, upper: 172 },
            { age: 3, lower: 18, upper: 172 },
            { age: 4, lower: 35, upper: 232 },
            { age: 5, lower: 35, upper: 232 },
            { age: 6, lower: 35, upper: 232 },
            { age: 7, lower: 57, upper: 277 },
            { age: 8, lower: 57, upper: 277 },
            { age: 9, lower: 57, upper: 277 },
            { age: 10, lower: 118, upper: 448 },
            { age: 11, lower: 118, upper: 448 },
            { age: 12, lower: 170, upper: 527 },
            { age: 13, lower: 170, upper: 527 },
            { age: 14, lower: 191, upper: 496 },
            { age: 15, lower: 191, upper: 496 },
            { age: 16, lower: 190, upper: 429 },
            { age: 17, lower: 190, upper: 429 },
            { age: 18, lower: 190, upper: 429 },
            { age: 19, lower: 117, upper: 323 },
            { age: 20, lower: 117, upper: 323 },
            { age: 21, lower: 117, upper: 323 }
        ]
    },

    "cisbio": {
        "male": [
            { age: 0, lower: 24, upper: 135 },
            { age: 1, lower: 26, upper: 145 },
            { age: 2, lower: 30, upper: 160 },
            { age: 3, lower: 35, upper: 180 },
            { age: 4, lower: 40, upper: 200 },
            { age: 5, lower: 46, upper: 220 },
            { age: 6, lower: 52, upper: 242 },
            { age: 7, lower: 58, upper: 268 },
            { age: 8, lower: 66, upper: 298 },
            { age: 9, lower: 76, upper: 332 },
            { age: 10, lower: 88, upper: 375 },
            { age: 11, lower: 104, upper: 422 },
            { age: 12, lower: 120, upper: 465 },
            { age: 13, lower: 134, upper: 505 },
            { age: 14, lower: 145, upper: 532 },
            { age: 15, lower: 150, upper: 542 },
            { age: 16, lower: 148, upper: 532 },
            { age: 17, lower: 140, upper: 502 },
            { age: 18, lower: 197, upper: 486 },
            { age: 19, lower: 197, upper: 486 },
            { age: 20, lower: 197, upper: 486 },
            { age: 21, lower: 173, upper: 430 }
        ],
        "female": [
            { age: 0, lower: 16, upper: 115 },
            { age: 1, lower: 18, upper: 122 },
            { age: 2, lower: 21, upper: 135 },
            { age: 3, lower: 25, upper: 152 },
            { age: 4, lower: 30, upper: 175 },
            { age: 5, lower: 36, upper: 200 },
            { age: 6, lower: 42, upper: 228 },
            { age: 7, lower: 50, upper: 258 },
            { age: 8, lower: 60, upper: 295 },
            { age: 9, lower: 72, upper: 340 },
            { age: 10, lower: 85, upper: 392 },
            { age: 11, lower: 102, upper: 448 },
            { age: 12, lower: 118, upper: 495 },
            { age: 13, lower: 130, upper: 530 },
            { age: 14, lower: 138, upper: 548 },
            { age: 15, lower: 140, upper: 545 },
            { age: 16, lower: 138, upper: 528 },
            { age: 17, lower: 132, upper: 498 },
            { age: 18, lower: 169, upper: 517 },
            { age: 19, lower: 169, upper: 517 },
            { age: 20, lower: 169, upper: 517 },
            { age: 21, lower: 159, upper: 476 }
        ]
    },

    "generic": {
        "male": [],
        "female": []
    }
};

// Compute the generic average across all specific kits
for (let age = 0; age <= 21; age++) {
    let mLowerSum = 0, mUpperSum = 0;
    let fLowerSum = 0, fUpperSum = 0;
    let count = 0;

    for (const kit in referenceData) {
        if (kit === "generic") continue;
        mLowerSum += referenceData[kit].male[age].lower;
        mUpperSum += referenceData[kit].male[age].upper;
        fLowerSum += referenceData[kit].female[age].lower;
        fUpperSum += referenceData[kit].female[age].upper;
        count++;
    }

    referenceData["generic"].male.push({
        age: age,
        lower: mLowerSum / count,
        upper: mUpperSum / count
    });

    referenceData["generic"].female.push({
        age: age,
        lower: fLowerSum / count,
        upper: fUpperSum / count
    });
}

/**
 * Get the Mean and Standard Deviation for a given kit, sex, and age
 */
function getReferenceStats(kit, sex, age) {
    const data = referenceData[kit]?.[sex];
    if (!data) return null;

    const record = data.find(r => r.age === parseInt(age)) || data[data.length - 1];

    const mean = (record.lower + record.upper) / 2;
    const sd = (record.upper - record.lower) / 3.92;

    return { mean, sd, lower: record.lower, upper: record.upper };
}

/**
 * Get full curve data for Chart.js
 */
function getFullCurve(kit, sex) {
    return referenceData[kit]?.[sex] || null;
}

window.IGFDatabase = { getReferenceStats, getFullCurve };
