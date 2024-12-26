/**
 * @param {number} iter Number of iterations per function
 * @param {('micro'|'mili'|'second')} units Units to display results
 * @param {number} decimals How many decimals to display for the times
 * @param {Array<Function>} functionArr Array of functions to be tested
 * @param {any} args Arguments to be passed to each function
 */
function benchmark(
    { iterations = 10, units = "mili", decimals = 2 },
    functionArr,
    ...args
) {
    const totalTimes = functionArr.map(() => 0);
    for (let i = 0; i < iterations; i++) {
        for (let func = 0; func < functionArr.length; func++) {
            const start = performance.now();
            functionArr[func](...args);
            totalTimes[func] += performance.now() - start;
        }
    }

    const avgTimesMicroSec = totalTimes.map((time) => time / iterations);
    const benchmarks = [];
    for (let i = 0; i < avgTimesMicroSec.length; i++) {
        benchmarks.push({
            name: functionArr[i].name,
            time: avgTimesMicroSec[i],
        });
    }

    benchmarks.sort((a, b) => b.time - a.time);

    let multiplier;
    let prefix;
    switch (units) {
        case "micro":
            multiplier = 1000;
            prefix = "μ";
            break;
        case "mili":
            multiplier = 1;
            prefix = "m";
            break;
        case "second":
            multiplier = 0.001;
            prefix = " ";
            break;
    }

    const longestName = benchmarks.reduce((prev, current) =>
        current.name.length > prev.name.length ? current : prev,
    ).name.length;

    const longestTime = Math.ceil(benchmarks[0].time * multiplier).toString()
        .length;

    for (let i = 0; i < benchmarks.length; i++) {
        benchmarks[i].percentString =
            i === 0
                ? "0"
                : (100 * (1 - benchmarks[i].time / benchmarks[0].time))
                      .toFixed(2)
                      .toString();
    }

    const longestPercent = benchmarks.reduce((prev, current) =>
        current.percentString.length > prev.percentString.length
            ? current
            : prev,
    ).percentString.length;

    console.log();
    for (let i = 0; i < benchmarks.length; i++) {
        const item = benchmarks[i];
        const timeString = (item.time * multiplier).toFixed(decimals);

        console.log(
            `Executed ${item.name} `.padEnd(longestName + 10, " "),
            `${timeString} ${prefix}s `.padStart(longestTime + 8, " "),
            `${item.percentString} % faster`.padStart(longestPercent + 10, " "),
        );
    }
}

module.exports = benchmark;
