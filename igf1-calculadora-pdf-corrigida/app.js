// app.js
document.addEventListener('DOMContentLoaded', () => {
    // --- Localization & Sources Logic ---
    const currentLang = { code: 'pt' };

    const sourcesData = [
        {
            key: "roche",
            label: "Roche Elecsys IGF-1",
            textPt: "Folheto Roche Elecsys IGF-1: valores esperados por idade e sexo (CIM RD002173)",
            textEn: "Roche Elecsys IGF-1 method sheet: age/sex expected values (CIM RD002173)",
            link: "https://diagnostics.roche.com/global/en/products/lab/elecsys-igf-1-cps-000488.html"
        },
        {
            key: "mediagnost",
            label: "Mediagnost IGF-I ELISA (E20)",
            textPt: "IFU Mediagnost E20: percentis de Blum/Ranke por idade, sexo e puberdade",
            textEn: "Mediagnost E20 IFU: Blum/Ranke percentiles by age, sex, and puberty",
            link: "https://mediagnost.de/wp-content/uploads/2025/08/IFU-E20-RUO-E_Rev004.pdf"
        },
        {
            key: "mediagnost_ria",
            label: "Mediagnost IGF-I RIA (R20/E22)",
            textPt: "IFU Mediagnost: valores de Blum/Ranke aplicáveis aos ensaios IGF-I Mediagnost",
            textEn: "Mediagnost IFU: Blum/Ranke values applicable to Mediagnost IGF-I assays",
            link: "https://mediagnost.de/wp-content/uploads/2025/08/IFU-E20-RUO-E_Rev004.pdf"
        },
        {
            key: "liaison",
            label: "DiaSorin LIAISON IGF-I",
            textPt: "IFU DiaSorin LIAISON IGF-I: estudo de referência com 4419 amostras",
            textEn: "DiaSorin LIAISON IGF-I IFU: reference study with 4419 specimens",
            link: "https://www.diasorin.com/sites/default/files/allegati_prodotti/etigfg071_igf-i_tds_313231-535_en.pdf"
        },
        {
            key: "isys",
            label: "IDS-iSYS IGF-I",
            textPt: "Bidlingmaier et al. 2014: intervalos 2,5–97,5 por idade e sexo",
            textEn: "Bidlingmaier et al. 2014: age/sex 2.5th–97.5th percentile intervals",
            link: "https://pubmed.ncbi.nlm.nih.gov/24606072/"
        },
        {
            key: "immulite_pre",
            label: "Siemens IMMULITE 2000 IGF-I (legacy / pré-WHO 02/254)",
            textPt: "Valores adultos alinhados com Chanson et al. 2016; valores pediátricos mantidos como aproximação legacy",
            textEn: "Adult values aligned with Chanson et al. 2016; pediatric values retained as a legacy approximation",
            link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5054194/"
        },
        {
            key: "immulite_post",
            label: "Siemens IMMULITE 2000/XPi IGF-I (WHO 02/254)",
            textPt: "Folheto Siemens IMMULITE 2000 IGF-I: intervalos pediátricos e adultos",
            textEn: "Siemens IMMULITE 2000 IGF-I package insert: pediatric and adult intervals",
            link: "https://leistungsverzeichnis.uk-koeln.de/Diagnostik/Parameter/Testkits/Siemens/SM_IGF-I.pdf"
        },
        {
            key: "cisbio",
            label: "Cisbio IGF-I RIACT",
            textPt: "Chanson et al. 2016: comparação VARETE de seis ensaios em adultos",
            textEn: "Chanson et al. 2016: VARETE six-assay adult comparison",
            link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5054194/"
        }
    ];

    const translations = {
        pt: {
            appTitle: "Calculadora SDS IGF-1",
            appSubtitle: "Cálculo Científico do Score de Desvio Padrão para níveis de IGF-1 em Pediatria e Jovens Adultos (0-21 Anos).",
            kitLabel: "Kit de Ensaio / Método",
            ageLabel: "Idade (Anos)",
            sexLabel: "Sexo",
            maleOption: "Masculino",
            femaleOption: "Feminino",
            igfValueLabel: "Medição IGF-1",
            calculateBtn: "Calcular Score SDS",
            resultTitle: "Score de Desvio Padrão (Z-Score)",
            convertedLabel: "Valor Convertido:",
            refRangeLabel: "Intervalo Ref.:",
            infoTitle: "Compreender o SDS do IGF-1",
            infoWhyTitle: "Porquê usar o SDS (Z-Score)?",
            infoWhyText: "Como os valores normais variam fortemente por idade e sexo, os valores brutos são difíceis de interpretar. Um Score de Desvio Padrão (SDS) compara o valor do doente com a média de uma população saudável da mesma idade e sexo.",
            infoNormal: "<strong>Entre -2 e +2:</strong> Considerado normal.",
            infoLow: "<strong>Abaixo de -2:</strong> Potencial deficiência de GH.",
            infoHigh: "<strong>Acima de +2:</strong> Potencial excesso de GH.",
            cnnhcNoticeTitle: "Aviso Clínico (INFARMED / CNNHC)",
            cnnhcNoticeText: "A <em>Comissão Nacional para a Normalização da Hormona do Crescimento (CNNHC)</em> do Infarmed reitera que <strong>não existe uma tabela universal de IGF-1</strong>. Os valores são estritamente dependentes do método de ensaio utilizado. A avaliação clínica oficial em Portugal requer a consulta obrigatória dos intervalos de referência validados e emitidos pelo laboratório que realizou a análise.",
            infoSourcesTitle: "Fontes dos Dados (Aproximações)",
            infoSourcesText: "Esta calculadora demonstra distribuições estimadas baseadas nas calibrações de referência (ex: OMS 02/254) presentes na literatura para os seguintes ensaios:",
            footerDisclaimer: "Para fins académicos e de demonstração. Não utilizar para diagnóstico médico definitivo. Consulte o relatório analítico oficial do seu laboratório.",
            interpLow: "Abaixo do Intervalo Normal (Potencial Deficiência)",
            interpHigh: "Acima do Intervalo Normal (Potencial Excesso)",
            interpBorder: "Limítrofe Normal",
            interpNormal: "Intervalo Normal",
            errorData: "Dados de referência não disponíveis para esta combinação.",
            placeholderValue: "Ex: 250",
            genericKit: "Média Genérica (Aproximação global)",
            chartTitle: "Percentis de IGF-1 por Idade",
            downloadPdfBtn: "Descarregar PDF",
            sendEmailBtn: "Enviar por Email",
            emailSubject: "Resultados IGF-1 SDS",
            emailBody: "Aqui estão os resultados calculados do IGF-1 SDS:\n\nIdade: {age} anos\nSexo: {sex}\nKit: {kit}\nIGF-1: {value} ng/mL\n\nScore SDS: {sds}\nInterpretação: {interpretation}\nIntervalo de Referência: {refRange} ng/mL"
        },
        en: {
            appTitle: "IGF-1 SDS Calculator",
            appSubtitle: "Scientific Standard Deviation Score calculation for Pediatric and Young Adult IGF-1 levels (0-21 Years).",
            kitLabel: "Assay Kit / Method",
            ageLabel: "Age (Years)",
            sexLabel: "Sex",
            maleOption: "Male",
            femaleOption: "Female",
            igfValueLabel: "IGF-1 Measurement",
            calculateBtn: "Calculate SDS Score",
            resultTitle: "Standard Deviation Score (Z-Score)",
            convertedLabel: "Converted Value:",
            refRangeLabel: "Ref. Range:",
            infoTitle: "Understanding IGF-1 SDS",
            infoWhyTitle: "Why use SDS (Z-Score)?",
            infoWhyText: "Because normal ranges vary heavily by age and sex, raw values are difficult to interpret. A Standard Deviation Score (SDS) compares a patient's value to the mean of a healthy population of the same age and sex.",
            infoNormal: "<strong>Between -2 and +2:</strong> Generally considered normal.",
            infoLow: "<strong>Below -2:</strong> Potential GH deficiency.",
            infoHigh: "<strong>Above +2:</strong> Potential GH excess.",
            cnnhcNoticeTitle: "Clinical Notice (INFARMED / CNNHC)",
            cnnhcNoticeText: "The <em>Comissão Nacional para a Normalização da Hormona do Crescimento (CNNHC)</em> of Infarmed iterates that <strong>there is no universal IGF-1 table</strong>. Values are strictly dependent on the assay method used. Official clinical evaluation in Portugal requires mandatory consultation of the validated reference intervals issued by the laboratory that performed the analysis.",
            infoSourcesTitle: "Data Sources (Approximations)",
            infoSourcesText: "This calculator demonstrates estimated continuous distributions based on standard reference calibrations (e.g., WHO 02/254) present in literature for the following assays:",
            footerDisclaimer: "For academic and demonstration purposes. Do not use for definitive medical diagnosis. Consult your laboratory's official analytical report.",
            interpLow: "Below Normal Range (Potential Deficiency)",
            interpHigh: "Above Normal Range (Potential Excess)",
            interpBorder: "Borderline Normal",
            interpNormal: "Normal Range",
            errorData: "Reference data not available for this combination.",
            placeholderValue: "e.g. 250",
            genericKit: "Generic Average (Global approximation)",
            chartTitle: "IGF-1 Percentiles by Age",
            downloadPdfBtn: "Download PDF",
            sendEmailBtn: "Send via Email",
            emailSubject: "IGF-1 SDS Results",
            emailBody: "Here are the calculated IGF-1 SDS results:\n\nAge: {age} years\nSex: {sex}\nKit: {kit}\nIGF-1: {value} ng/mL\n\nSDS Score: {sds}\nInterpretation: {interpretation}\nReference Range: {refRange} ng/mL"
        }
    };

    function renderSourcesList(lang) {
        const listEl = document.getElementById('sources-list');
        listEl.innerHTML = '';
        sourcesData.forEach(source => {
            const li = document.createElement('li');
            const text = lang === 'pt' ? source.textPt : source.textEn;
            li.innerHTML = `<strong>${source.label}:</strong> <a href="${source.link}" target="_blank" style="color: var(--nn-blue-lighter); text-decoration: none;">${text}</a>`;
            listEl.appendChild(li);
        });
    }

    function updateLanguage(lang) {
        currentLang.code = lang;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });
        document.getElementById('igfValue').placeholder = translations[lang].placeholderValue;

        // Update language buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        renderSourcesList(lang);

        // Recalculate to update interpretation text and chart if active
        if (resultSection.classList.contains('active')) {
            calculateSDS();
        }
    }

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            updateLanguage(e.target.getAttribute('data-lang'));
        });
    });

    // Init sources
    renderSourcesList(currentLang.code);

    // --- Age Input Logic ---
    const ageInput = document.getElementById('age');
    const btnMinus = document.getElementById('age-minus');
    const btnPlus = document.getElementById('age-plus');

    btnMinus.addEventListener('click', () => {
        let val = parseInt(ageInput.value) || 0;
        if (val > 0) ageInput.value = val - 1;
        triggerCalculation();
    });

    btnPlus.addEventListener('click', () => {
        let val = parseInt(ageInput.value) || 0;
        if (val < 21) ageInput.value = val + 1;
        triggerCalculation();
    });

    // --- Chart Logic ---
    let igfChartInstance = null;

    function renderChart(kit, sex, patientAge, patientValue) {
        const ctx = document.getElementById('igfChart').getContext('2d');
        const curveData = window.IGFDatabase.getFullCurve(kit, sex);

        if (!curveData) return;

        const ages = curveData.map(d => d.age);
        const lowerBounds = curveData.map(d => d.lower);
        const upperBounds = curveData.map(d => d.upper);
        const means = curveData.map(d => (d.lower + d.upper) / 2);

        // Patient point (only shown at patientAge)
        const patientData = ages.map(a => (a === patientAge ? patientValue : null));

        if (igfChartInstance) {
            igfChartInstance.destroy();
        }

        const titleText = translations[currentLang.code].chartTitle;

        igfChartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ages,
                datasets: [
                    {
                        label: 'Paciente (Você)',
                        data: patientData,
                        backgroundColor: '#ef4444',
                        borderColor: '#ef4444',
                        borderWidth: 2,
                        pointRadius: 8,
                        pointHoverRadius: 10,
                        showLine: false,
                        zIndex: 10
                    },
                    {
                        label: '+2 SD (Upper)',
                        data: upperBounds,
                        borderColor: 'rgba(148, 163, 184, 0.5)',
                        borderWidth: 1.5,
                        borderDash: [5, 5],
                        fill: false,
                        pointRadius: 0,
                        cubicInterpolationMode: 'monotone'
                    },
                    {
                        label: 'Mean',
                        data: means,
                        borderColor: '#0050A8', // nn-blue-lighter
                        borderWidth: 2,
                        fill: false,
                        pointRadius: 0,
                        cubicInterpolationMode: 'monotone'
                    },
                    {
                        label: '-2 SD (Lower)',
                        data: lowerBounds,
                        borderColor: 'rgba(148, 163, 184, 0.5)',
                        borderWidth: 1.5,
                        borderDash: [5, 5],
                        fill: '-2', // Fill area between lower and upper if needed
                        pointRadius: 0,
                        cubicInterpolationMode: 'monotone'
                    }
                ]
            },
            options: {
                animation: false,
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                plugins: {
                    title: {
                        display: true,
                        text: titleText,
                        color: '#002855',
                        font: { family: 'Inter', size: 14 }
                    },
                    legend: {
                        position: 'bottom',
                        labels: {
                            usePointStyle: true,
                            boxWidth: 8
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: translations[currentLang.code].ageLabel
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'IGF-1 (ng/mL)'
                        },
                        min: 0
                    }
                }
            }
        });
    }

    // --- Calculator Logic ---
    const form = document.getElementById('sds-form');
    const resultSection = document.getElementById('result-section');
    const sdsScoreEl = document.getElementById('sds-score');
    const interpretationEl = document.getElementById('sds-interpretation');
    const convertedValueEl = document.getElementById('converted-value');
    const refRangeEl = document.getElementById('ref-range');
    const gaugeFill = document.getElementById('gauge-fill');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        calculateSDS();
    });

    function triggerCalculation() {
        if (resultSection.classList.contains('active') && form.checkValidity()) {
            calculateSDS();
        }
    }

    const inputs = form.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.addEventListener('change', triggerCalculation);
        if (input.type === 'number') {
            input.addEventListener('input', triggerCalculation);
        }
    });

    function calculateSDS() {
        const kit = document.getElementById('kit').value;
        const sex = document.getElementById('sex').value;
        const age = parseInt(ageInput.value);
        const rawValue = parseFloat(document.getElementById('igfValue').value);
        const unit = document.getElementById('unit').value;

        if (isNaN(age) || age < 0 || age > 21 || isNaN(rawValue)) {
            return;
        }

        let valueNgMl = rawValue;
        if (unit === 'nmoll') {
            valueNgMl = rawValue * 7.649;
        }

        const stats = window.IGFDatabase.getReferenceStats(kit, sex, age);

        if (!stats) {
            alert(translations[currentLang.code].errorData);
            return;
        }

        const sds = (valueNgMl - stats.mean) / stats.sd;
        displayResult(sds, valueNgMl, stats);

        // Render the chart
        renderChart(kit, sex, age, valueNgMl);
    }

    function displayResult(sds, valueNgMl, stats) {
        resultSection.classList.add('active');

        const formattedSDS = sds.toFixed(2);
        sdsScoreEl.textContent = (sds > 0 ? '+' : '') + formattedSDS;
        convertedValueEl.textContent = valueNgMl.toFixed(1);
        refRangeEl.textContent = `${stats.lower.toFixed(1)} - ${stats.upper.toFixed(1)}`;

        sdsScoreEl.className = 'sds-score';

        const langDict = translations[currentLang.code];

        if (sds < -2) {
            interpretationEl.textContent = langDict.interpLow;
            sdsScoreEl.classList.add('status-danger');
            gaugeFill.style.backgroundColor = 'var(--danger)';
        } else if (sds > 2) {
            interpretationEl.textContent = langDict.interpHigh;
            sdsScoreEl.classList.add('status-danger');
            gaugeFill.style.backgroundColor = 'var(--danger)';
        } else if (sds <= -1 || sds >= 1) {
            interpretationEl.textContent = langDict.interpBorder;
            sdsScoreEl.classList.add('status-warning');
            gaugeFill.style.backgroundColor = 'var(--warning)';
        } else {
            interpretationEl.textContent = langDict.interpNormal;
            sdsScoreEl.classList.add('status-normal');
            gaugeFill.style.backgroundColor = 'var(--success)';
        }

        let gaugePercentage = ((sds + 3) / 6) * 100;
        gaugePercentage = Math.max(0, Math.min(100, gaugePercentage));
        gaugeFill.style.width = `${gaugePercentage}%`;
        gaugeFill.style.left = '0%';

        // Setup Export Actions
        setupExportActions(sds, valueNgMl, stats, formattedSDS);
    }

    function getSelectedOptionText(selectId) {
        const select = document.getElementById(selectId);
        return select.options[select.selectedIndex].text.trim();
    }

    function formatSigned(value, decimals = 2) {
        const formatted = Number(value).toFixed(decimals);
        return value > 0 ? `+${formatted}` : formatted;
    }

    function getChartImageData() {
        const chartCanvas = document.getElementById('igfChart');
        if (!chartCanvas || !chartCanvas.width || !chartCanvas.height) return null;

        // Make the Chart.js canvas PDF-safe by adding a white background first.
        const exportCanvas = document.createElement('canvas');
        exportCanvas.width = chartCanvas.width;
        exportCanvas.height = chartCanvas.height;
        const exportCtx = exportCanvas.getContext('2d');
        exportCtx.fillStyle = '#ffffff';
        exportCtx.fillRect(0, 0, exportCanvas.width, exportCanvas.height);
        exportCtx.drawImage(chartCanvas, 0, 0);
        return exportCanvas.toDataURL('image/png', 1.0);
    }

    function getReportData(sds, valueNgMl, stats, formattedSDS) {
        const unitSelect = document.getElementById('unit');
        const rawValue = parseFloat(document.getElementById('igfValue').value);
        const selectedUnit = unitSelect.options[unitSelect.selectedIndex].text.trim();
        const languageIsPt = currentLang.code === 'pt';

        return {
            lang: currentLang.code,
            title: languageIsPt ? 'Relatório IGF-1 SDS' : 'IGF-1 SDS Report',
            generatedAt: new Date().toLocaleString(languageIsPt ? 'pt-PT' : 'en-GB'),
            kitName: getSelectedOptionText('kit'),
            sexName: getSelectedOptionText('sex'),
            age: document.getElementById('age').value,
            rawValue: Number.isFinite(rawValue) ? rawValue.toFixed(selectedUnit === 'ng/mL' ? 1 : 2) : '-',
            selectedUnit,
            convertedValue: valueNgMl.toFixed(1),
            sdsText: formatSigned(sds, 2),
            interpretation: interpretationEl.textContent,
            referenceRange: `${stats.lower.toFixed(1)} - ${stats.upper.toFixed(1)}`,
            mean: stats.mean.toFixed(1),
            sd: stats.sd.toFixed(1),
            chartImage: getChartImageData(),
            statusColor: (sds < -2 || sds > 2) ? '#ef4444' : (sds <= -1 || sds >= 1) ? '#f59e0b' : '#10b981'
        };
    }

    async function generatePdfReport(data) {
        // Let the browser/Chart.js finish painting the graph before capture.
        await new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)));
        if (igfChartInstance) igfChartInstance.update('none');
        data.chartImage = getChartImageData();

        const jsPDFConstructor = window.jspdf && window.jspdf.jsPDF;
        if (jsPDFConstructor && data.chartImage) {
            generatePdfWithJsPdf(jsPDFConstructor, data);
        } else {
            await generatePdfWithHtml2Pdf(data);
        }
    }

    function generatePdfWithJsPdf(jsPDFConstructor, data) {
        const pdf = new jsPDFConstructor({ orientation: 'portrait', unit: 'mm', format: 'a4' });
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();
        const margin = 14;
        const blue = [0, 40, 85];
        const lightBlue = [0, 80, 168];
        const greyText = [85, 85, 85];
        const border = [226, 232, 240];

        pdf.setProperties({
            title: data.title,
            subject: 'IGF-1 SDS calculator report',
            author: 'Roxane Guerreiro'
        });

        // Header
        pdf.setFillColor(...blue);
        pdf.rect(0, 0, pageWidth, 30, 'F');
        pdf.setTextColor(255, 255, 255);
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(18);
        pdf.text(data.title, margin, 13);
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(9);
        pdf.text(`Gerado em / Generated on: ${data.generatedAt}`, margin, 22);

        // Intro line
        let y = 42;
        pdf.setTextColor(...blue);
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(12);
        pdf.text('Parâmetros introduzidos / Input parameters', margin, y);

        // Parameter box
        y += 6;
        pdf.setDrawColor(...border);
        pdf.setFillColor(248, 250, 252);
        pdf.roundedRect(margin, y, pageWidth - margin * 2, 44, 3, 3, 'FD');

        const leftX = margin + 6;
        const rightX = pageWidth / 2 + 4;
        let rowY = y + 10;
        const rowGap = 8;

        function labelValue(label, value, x, currentY) {
            pdf.setFont('helvetica', 'bold');
            pdf.setFontSize(9);
            pdf.setTextColor(...blue);
            pdf.text(label, x, currentY);
            pdf.setFont('helvetica', 'normal');
            pdf.setTextColor(30, 41, 59);
            const wrapped = pdf.splitTextToSize(String(value), 62);
            pdf.text(wrapped, x + 34, currentY);
        }

        labelValue('Idade / Age:', `${data.age} anos / years`, leftX, rowY);
        labelValue('Sexo / Sex:', data.sexName, rightX, rowY);
        rowY += rowGap;
        labelValue('Método / Assay:', data.kitName, leftX, rowY);
        labelValue('IGF-1 original:', `${data.rawValue} ${data.selectedUnit}`, rightX, rowY);
        rowY += rowGap;
        labelValue('IGF-1 em ng/mL:', `${data.convertedValue} ng/mL`, leftX, rowY);

        // Result box
        y += 56;
        pdf.setTextColor(...blue);
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(12);
        pdf.text('Resultados / Results', margin, y);

        y += 6;
        pdf.setDrawColor(...lightBlue);
        pdf.setFillColor(255, 255, 255);
        pdf.roundedRect(margin, y, pageWidth - margin * 2, 42, 3, 3, 'FD');

        pdf.setFont('helvetica', 'bold');
        pdf.setTextColor(...blue);
        pdf.setFontSize(24);
        pdf.text(data.sdsText, margin + 8, y + 17);
        pdf.setFontSize(9);
        pdf.setTextColor(...greyText);
        pdf.text('Z-Score / SDS', margin + 8, y + 25);

        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(10);
        pdf.setTextColor(data.statusColor);
        const interpWrapped = pdf.splitTextToSize(data.interpretation, 96);
        pdf.text(interpWrapped, pageWidth / 2 - 5, y + 13);
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(30, 41, 59);
        pdf.text(`Intervalo de referência / Reference range: ${data.referenceRange} ng/mL`, pageWidth / 2 - 5, y + 27);
        pdf.text(`Média estimada / Estimated mean: ${data.mean} ng/mL`, pageWidth / 2 - 5, y + 34);
        pdf.text(`DP estimado / Estimated SD: ${data.sd} ng/mL`, pageWidth / 2 - 5, y + 39);

        // Chart
        y += 56;
        pdf.setTextColor(...blue);
        pdf.setFont('helvetica', 'bold');
        pdf.setFontSize(12);
        pdf.text('Gráfico de percentis / Percentile graph', margin, y);

        y += 6;
        if (data.chartImage) {
            const chartWidth = pageWidth - margin * 2;
            const chartHeight = 82;
            pdf.setDrawColor(...border);
            pdf.roundedRect(margin, y, chartWidth, chartHeight, 2, 2, 'S');
            pdf.addImage(data.chartImage, 'PNG', margin + 2, y + 2, chartWidth - 4, chartHeight - 4);
            y += chartHeight + 10;
        } else {
            pdf.setFont('helvetica', 'normal');
            pdf.setTextColor(...greyText);
            pdf.text('O gráfico não estava disponível no momento da exportação.', margin, y + 8);
            y += 20;
        }

        // Notes
        pdf.setDrawColor(...border);
        pdf.line(margin, y, pageWidth - margin, y);
        y += 7;
        pdf.setFont('helvetica', 'normal');
        pdf.setFontSize(8);
        pdf.setTextColor(100, 116, 139);
        const note = 'Uso exclusivo para demonstração educacional. Não utilizar para diagnóstico médico definitivo. Consulte sempre o relatório analítico oficial do laboratório e os intervalos de referência validados para o método utilizado.';
        pdf.text(pdf.splitTextToSize(note, pageWidth - margin * 2), margin, y);

        // Footer
        pdf.setFontSize(8);
        pdf.setTextColor(148, 163, 184);
        pdf.text('Calculadora SDS IGF-1 | Roxane Guerreiro', margin, pageHeight - 10);
        pdf.text('1/1', pageWidth - margin - 8, pageHeight - 10);

        const safeDate = new Date().toISOString().slice(0, 10);
        pdf.save(`IGF1-SDS-Relatorio-${safeDate}.pdf`);
    }

    async function generatePdfWithHtml2Pdf(data) {
        const container = document.createElement('div');
        container.style.width = '794px';
        container.style.minHeight = '1123px';
        container.style.padding = '34px';
        container.style.background = '#ffffff';
        container.style.color = '#1e293b';
        container.style.fontFamily = 'Inter, Arial, sans-serif';
        container.style.position = 'fixed';
        container.style.left = '0';
        container.style.top = '0';
        container.style.zIndex = '2147483647';
        container.style.boxSizing = 'border-box';
        container.style.pointerEvents = 'none';

        container.innerHTML = `
            <div style="background:#002855;color:white;margin:-34px -34px 28px -34px;padding:24px 34px;">
                <h1 style="margin:0;font-size:26px;">${data.title}</h1>
                <p style="margin:8px 0 0 0;font-size:13px;opacity:.9;">Gerado em / Generated on: ${data.generatedAt}</p>
            </div>
            <h2 style="color:#002855;font-size:18px;margin:0 0 12px 0;">Parâmetros introduzidos / Input parameters</h2>
            <div style="border:1px solid #e2e8f0;background:#f8fafc;border-radius:10px;padding:16px;margin-bottom:22px;">
                <p><strong>Idade / Age:</strong> ${data.age} anos / years</p>
                <p><strong>Sexo / Sex:</strong> ${data.sexName}</p>
                <p><strong>Método / Assay:</strong> ${data.kitName}</p>
                <p><strong>IGF-1 original:</strong> ${data.rawValue} ${data.selectedUnit}</p>
                <p><strong>IGF-1 convertido / Converted:</strong> ${data.convertedValue} ng/mL</p>
            </div>
            <h2 style="color:#002855;font-size:18px;margin:0 0 12px 0;">Resultados / Results</h2>
            <div style="border:2px solid #0050A8;border-radius:10px;padding:16px;margin-bottom:22px;">
                <p style="font-size:30px;margin:0;color:#002855;"><strong>${data.sdsText}</strong></p>
                <p style="margin:6px 0 12px;color:${data.statusColor};font-weight:700;">${data.interpretation}</p>
                <p><strong>Intervalo de referência / Reference range:</strong> ${data.referenceRange} ng/mL</p>
                <p><strong>Média estimada / Estimated mean:</strong> ${data.mean} ng/mL</p>
                <p><strong>DP estimado / Estimated SD:</strong> ${data.sd} ng/mL</p>
            </div>
            <h2 style="color:#002855;font-size:18px;margin:0 0 12px 0;">Gráfico de percentis / Percentile graph</h2>
            ${data.chartImage ? `<img src="${data.chartImage}" style="width:100%;border:1px solid #e2e8f0;border-radius:10px;background:white;padding:8px;box-sizing:border-box;">` : '<p>Gráfico não disponível.</p>'}
            <div style="margin-top:24px;border-top:1px solid #e2e8f0;padding-top:12px;color:#64748b;font-size:12px;line-height:1.5;text-align:center;">
                <p>Uso exclusivo para demonstração educacional. Não utilizar para diagnóstico médico definitivo.</p>
                <p>Consulte sempre o relatório analítico oficial do laboratório e os intervalos de referência validados.</p>
            </div>
        `;

        document.body.appendChild(container);

        const opt = {
            margin: 0,
            filename: `IGF1-SDS-Relatorio-${new Date().toISOString().slice(0, 10)}.pdf`,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true, backgroundColor: '#ffffff', scrollX: 0, scrollY: 0 },
            jsPDF: { unit: 'px', format: [794, 1123], orientation: 'portrait' }
        };

        try {
            await html2pdf().set(opt).from(container).save();
        } finally {
            document.body.removeChild(container);
        }
    }

    function setupExportActions(sds, valueNgMl, stats, formattedSDS) {
        const btnPdf = document.getElementById('btn-download-pdf');
        const btnEmail = document.getElementById('btn-send-email');
        if (!btnPdf || !btnEmail) return;

        btnPdf.onclick = async () => {
            const originalText = btnPdf.innerText;
            btnPdf.innerHTML = '<span class="spinner"></span>' + (currentLang.code === 'pt' ? 'A gerar PDF...' : 'Generating PDF...');
            btnPdf.disabled = true;
            btnPdf.setAttribute('aria-busy', 'true');

            try {
                const data = getReportData(sds, valueNgMl, stats, formattedSDS);
                await generatePdfReport(data);
            } catch (err) {
                console.error('PDF generation error:', err);
                alert(currentLang.code === 'pt'
                    ? 'Não foi possível gerar o PDF. Confirma se calculaste o resultado e se o gráfico apareceu antes de descarregar.'
                    : 'The PDF could not be generated. Please check that the result was calculated and the chart is visible before downloading.');
            } finally {
                btnPdf.innerHTML = originalText;
                btnPdf.disabled = false;
                btnPdf.removeAttribute('aria-busy');
            }
        };

        btnEmail.onclick = () => {
            const langDict = translations[currentLang.code];
            const data = getReportData(sds, valueNgMl, stats, formattedSDS);

            const bodyText = langDict.emailBody
                .replace('{age}', data.age)
                .replace('{sex}', data.sexName)
                .replace('{kit}', data.kitName)
                .replace('{value}', `${data.convertedValue}`)
                .replace('{sds}', data.sdsText)
                .replace('{interpretation}', data.interpretation)
                .replace('{refRange}', data.referenceRange);

            const mailtoLink = `mailto:?subject=${encodeURIComponent(langDict.emailSubject)}&body=${encodeURIComponent(bodyText)}`;
            window.location.href = mailtoLink;
        };
    }

});
