const pageSlices = [
    [
      {
        label: 'PART A Certificate No',
        left: 25,
        right: 445,
        top: 230,
        bottom: 260,
      },
      {
        label: 'PART A Name and Address of Employer/Bank',
        left: 45,
        right: 425,
        top: 290,
        bottom: 395,
      },
      {
        label: 'PART A Pan of deductor',
        left: 23,
        right: 255,
        top: 455,
        bottom: 485,
      },
      {
        label: 'PART A Tan of deductor',
        left: 255,
        right: 450,
        top: 455,
        bottom: 485,
      },
      {
        label: 'PART A Pan of Employee',
        left: 450,
        right: 605,
        top: 455,
        bottom: 485,
      },
      {
        label: 'PART A CIT (TDS)',
        left: 23,
        right: 450,
        top: 512,
        bottom: 588,
      },
      {
        label: 'PART A Assessment Year',
        left: 510,
        right: 580,
        top: 540,
        bottom: 565,
      },
      {
        label: 'PART A Period with the Employeer (From)',
        left: 663,
        right: 750,
        top: 546,
        bottom: 568,
      },
      {
        label: 'PART A Period with the Employeer (To)',
        left: 770,
        right: 860,
        top: 548,
        bottom: 562,
      },
      {
        label: 'RNQS Q1',
        left: 155,
        right: 325,
        top: 695,
        bottom: 715,
      },
      {
        label: 'RNQS Q2',
        left: 155,
        right: 325,
        top: 715,
        bottom: 740,
      },
      {
        label: 'RNQS Q3',
        left: 155,
        right: 325,
        top: 740,
        bottom: 765,
      },
      {
        label: 'RNQS Q4',
        left: 155,
        right: 325,
        top: 765,
        bottom: 790,
      },
      // AMOUNT PAID/CREDITED
      {
        label: 'AMOUNT PAID/CREDITED Q1',
        left: 365,
        right: 485,
        top: 695,
        bottom: 715,
      },
      {
        label: 'AMOUNT PAID/CREDITED Q2',
        left: 365,
        right: 485,
        top: 715,
        bottom: 740,
      },
      {
        label: 'AMOUNT PAID/CREDITED Q3',
        left: 365,
        right: 485,
        top: 740,
        bottom: 765,
      },
      {
        label: 'AMOUNT PAID/CREDITED Q4',
        left: 365,
        right: 485,
        top: 765,
        bottom: 790,
      },
      // AMOUNT OF TAX DEDUCTED
      {
        label: 'AMOUNT OF TAX DEDUCTED Q1',
        left: 540,
        right: 665,
        top: 695,
        bottom: 715,
      },
      {
        label: 'AMOUNT OF TAX DEDUCTED Q2',
        left: 540,
        right: 665,
        top: 718,
        bottom: 735,
      },
      {
        label: 'AMOUNT OF TAX DEDUCTED Q3',
        left: 540,
        right: 665,
        top: 740,
        bottom: 765,
      },
      {
        label: 'AMOUNT OF TAX DEDUCTED Q4',
        left: 540,
        right: 665,
        top: 760,
        bottom: 785,
      },
      // AMOUNT OF TAX DEPOSITED/REMITTED
      {
        label: 'AMOUNT OF TAX DEPOSITED/REMITTED Q1',
        left: 750,
        right: 860,
        top: 695,
        bottom: 715,
      },
      {
        label: 'AMOUNT OF TAX DEPOSITED/REMITTED Q2',
        left: 740,
        right: 860,
        top: 710,
        bottom: 740,
      },
      {
        label: 'AMOUNT OF TAX DEPOSITED/REMITTED Q3',
        left: 750,
        right: 860,
        top: 740,
        bottom: 765,
      },
      {
        label: 'AMOUNT OF TAX DEPOSITED/REMITTED Q4',
        left: 740,
        right: 860,
        top: 760,
        bottom: 785,
      },
      // TOTAL AMOUNT PART A
      {
        label: 'TOTAL AMOUNT OF TAX DEDUCTED',
        left: 410,
        right: 484,
        top: 788,
        bottom: 804,
      },
      {
        label: 'TOTAL AMOUNT OF TAX DEPOSITED/REMITTED',
        left: 785,
        right: 860,
        top: 790,
        bottom: 804,
      },
      {
        label: 'TOTAL AMOUNT PAID/CREDITED',
        left: 785,
        right: 860,
        top: 790,
        bottom: 804,
      },
      // TAX DEPOSITED IN RESPECT OF DEDUCTEE
      {
        label: 'TAX DEPOSITED IN RESPECT OF DEDUCTEE 1',
        left: 165,
        right: 284,
        top: 1095,
        bottom: 1118,
      },
      {
        label: 'TAX DEPOSITED IN RESPECT OF DEDUCTEE 2',
        left: 165,
        right: 284,
        top: 1120,
        bottom: 1140,
      },
      {
        label: 'TAX DEPOSITED IN RESPECT OF DEDUCTEE 3',
        left: 165,
        right: 284,
        top: 1145,
        bottom: 1160,
      },
      {
        label: 'TAX DEPOSITED IN RESPECT OF DEDUCTEE 4',
        left: 165,
        right: 284,
        top: 1170,
        bottom: 1185,
      },
      // BRS CODE OF THE BANK BRANCH
      {
        label: 'BRS CODE OF THE BANK BRANCH 1',
        left: 340,
        right: 385,
        top: 1095,
        bottom: 1118,
      },
      {
        label: 'BRS CODE OF THE BANK BRANCH 2',
        left: 340,
        right: 385,
        top: 1120,
        bottom: 1140,
      },
      {
        label: 'BRS CODE OF THE BANK BRANCH 3',
        left: 340,
        right: 385,
        top: 1145,
        bottom: 1160,
      },
      {
        label: 'BRS CODE OF THE BANK BRANCH 4',
        left: 340,
        right: 385,
        top: 1170,
        bottom: 1185,
      },
      // DATE ON WHICH TAX DEPOSITED
      {
        label: 'DATE ON WHICH TAX DEPOSITED 1',
        left: 488,
        right: 548,
        top: 1095,
        bottom: 1118,
      },
      {
        label: 'DATE ON WHICH TAX DEPOSITED 2',
        left: 488,
        right: 548,
        top: 1120,
        bottom: 1140,
      },
      {
        label: 'DATE ON WHICH TAX DEPOSITED 3',
        left: 488,
        right: 548,
        top: 1145,
        bottom: 1160,
      },
      {
        label: 'DATE ON WHICH TAX DEPOSITED 4',
        left: 488,
        right: 548,
        top: 1170,
        bottom: 1185,
      },
      // CHALLAN SERIAL NUMBER
      {
        label: 'CHALLAN SERIAL NUMBER 1',
        left: 640,
        right: 680,
        top: 1095,
        bottom: 1118,
      },
      {
        label: 'CHALLAN SERIAL NUMBER 2',
        left: 640,
        right: 680,
        top: 1120,
        bottom: 1140,
      },
      {
        label: 'CHALLAN SERIAL NUMBER 3',
        left: 640,
        right: 680,
        top: 1145,
        bottom: 1160,
      },
      {
        label: 'CHALLAN SERIAL NUMBER 4',
        left: 640,
        right: 680,
        top: 1170,
        bottom: 1185,
      },
      // STATUS OF MATCHING WITH OLTAS
      {
        label: 'STATUS OF MATCHING WITH OLTAS 1',
        left: 790,
        right: 800,
        top: 1095,
        bottom: 1118,
      },
      {
        label: 'STATUS OF MATCHING WITH OLTAS 2',
        left: 790,
        right: 800,
        top: 1120,
        bottom: 1140,
      },
      {
        label: 'STATUS OF MATCHING WITH OLTAS 3',
        left: 790,
        right: 800,
        top: 1145,
        bottom: 1160,
      },
      {
        label: 'STATUS OF MATCHING WITH OLTAS 4',
        left: 790,
        right: 800,
        top: 1170,
        bottom: 1185,
      },
    ],
    // PART A 2
    [
      // TAX DEPOSITED IN RESPECT OF DEDUCTEE
      {
        label: 'TAX DEPOSITED IN RESPECT OF DEDUCTEE 5',
        left: 210,
        right: 283,
        top: 168,
        bottom: 185,
      },
      {
        label: 'TAX DEPOSITED IN RESPECT OF DEDUCTEE 6',
        left: 210,
        right: 283,
        top: 190,
        bottom: 207,
      },
      {
        label: 'TAX DEPOSITED IN RESPECT OF DEDUCTEE 7',
        left: 210,
        right: 283,
        top: 212,
        bottom: 231,
      },
      {
        label: 'TAX DEPOSITED IN RESPECT OF DEDUCTEE 8',
        left: 210,
        right: 284,
        top: 235,
        bottom: 252,
      },
      {
        label: 'TAX DEPOSITED IN RESPECT OF DEDUCTEE 9',
        left: 210,
        right: 284,
        top: 258,
        bottom: 275,
      },
      {
        label: 'TAX DEPOSITED IN RESPECT OF DEDUCTEE 10',
        left: 210,
        right: 284,
        top: 280,
        bottom: 297,
      },
      {
        label: 'TAX DEPOSITED IN RESPECT OF DEDUCTEE 11',
        left: 210,
        right: 284,
        top: 303,
        bottom: 321,
      },
      {
        label: 'TAX DEPOSITED IN RESPECT OF DEDUCTEE 12',
        left: 210,
        right: 284,
        top: 326,
        bottom: 343,
      },
      // BRS CODE OF THE BANK BRANCH
      {
        label: 'BRS CODE OF THE BANK BRANCH 5',
        left: 340,
        right: 385,
        top: 168,
        bottom: 185,
      },
      {
        label: 'BRS CODE OF THE BANK BRANCH 6',
        left: 340,
        right: 385,
        top: 190,
        bottom: 207,
      },
      {
        label: 'BRS CODE OF THE BANK BRANCH 7',
        left: 340,
        right: 385,
        top: 212,
        bottom: 231,
      },
      {
        label: 'BRS CODE OF THE BANK BRANCH 8',
        left: 340,
        right: 385,
        top: 235,
        bottom: 252,
      },
      {
        label: 'BRS CODE OF THE BANK BRANCH 9',
        left: 340,
        right: 385,
        top: 258,
        bottom: 275,
      },
      {
        label: 'BRS CODE OF THE BANK BRANCH 10',
        left: 340,
        right: 385,
        top: 280,
        bottom: 297,
      },
      {
        label: 'BRS CODE OF THE BANK BRANCH 11',
        left: 340,
        right: 385,
        top: 303,
        bottom: 321,
      },
      {
        label: 'BRS CODE OF THE BANK BRANCH 12',
        left: 340,
        right: 385,
        top: 326,
        bottom: 343,
      },
      // DATE ON WHICH TAX DEPOSITED
      {
        label: 'DATE ON WHICH TAX DEPOSITED 5',
        left: 488,
        right: 548,
        top: 168,
        bottom: 185,
      },
      {
        label: 'DATE ON WHICH TAX DEPOSITED 6',
        left: 488,
        right: 548,
        top: 190,
        bottom: 207,
      },
      {
        label: 'DATE ON WHICH TAX DEPOSITED 7',
        left: 488,
        right: 548,
        top: 212,
        bottom: 231,
      },
      {
        label: 'DATE ON WHICH TAX DEPOSITED 8',
        left: 488,
        right: 548,
        top: 235,
        bottom: 252,
      },
      {
        label: 'DATE ON WHICH TAX DEPOSITED 9',
        left: 488,
        right: 548,
        top: 258,
        bottom: 275,
      },
      {
        label: 'DATE ON WHICH TAX DEPOSITED 10',
        left: 488,
        right: 548,
        top: 280,
        bottom: 297,
      },
      {
        label: 'DATE ON WHICH TAX DEPOSITED 11',
        left: 488,
        right: 548,
        top: 303,
        bottom: 321,
      },
      {
        label: 'DATE ON WHICH TAX DEPOSITED 12',
        left: 488,
        right: 548,
        top: 326,
        bottom: 343,
      },
      // CHALLAN SERIAL NUMBER
      {
        label: 'CHALLAN SERIAL NUMBER 5',
        left: 640,
        right: 680,
        top: 168,
        bottom: 185,
      },
      {
        label: 'CHALLAN SERIAL NUMBER 6',
        left: 640,
        right: 680,
        top: 190,
        bottom: 207,
      },
      {
        label: 'CHALLAN SERIAL NUMBER 7',
        left: 640,
        right: 680,
        top: 212,
        bottom: 231,
      },
      {
        label: 'CHALLAN SERIAL NUMBER 8',
        left: 640,
        right: 680,
        top: 235,
        bottom: 252,
      },
      {
        label: 'CHALLAN SERIAL NUMBER 9',
        left: 640,
        right: 680,
        top: 258,
        bottom: 275,
      },
      {
        label: 'CHALLAN SERIAL NUMBER 10',
        left: 640,
        right: 680,
        top: 280,
        bottom: 297,
      },
      {
        label: 'CHALLAN SERIAL NUMBER 11',
        left: 640,
        right: 680,
        top: 303,
        bottom: 321,
      },
      {
        label: 'CHALLAN SERIAL NUMBER 12',
        left: 640,
        right: 680,
        top: 326,
        bottom: 343,
      },
      // STATUS OF MATCHING WITH OLTAS
      {
        label: 'STATUS OF MATCHING WITH OLTAS 5',
        left: 790,
        right: 800,
        top: 168,
        bottom: 185,
      },
      {
        label: 'STATUS OF MATCHING WITH OLTAS 6',
        left: 790,
        right: 800,
        top: 190,
        bottom: 207,
      },
      {
        label: 'STATUS OF MATCHING WITH OLTAS 7',
        left: 790,
        right: 800,
        top: 212,
        bottom: 231,
      },
      {
        label: 'STATUS OF MATCHING WITH OLTAS 8',
        left: 790,
        right: 800,
        top: 235,
        bottom: 252,
      },
      {
        label: 'STATUS OF MATCHING WITH OLTAS 9',
        left: 790,
        right: 800,
        top: 258,
        bottom: 275,
      },
      {
        label: 'STATUS OF MATCHING WITH OLTAS 10',
        left: 790,
        right: 800,
        top: 280,
        bottom: 297,
      },
      {
        label: 'STATUS OF MATCHING WITH OLTAS 11',
        left: 790,
        right: 800,
        top: 303,
        bottom: 321,
      },
      {
        label: 'STATUS OF MATCHING WITH OLTAS 12',
        left: 790,
        right: 800,
        top: 326,
        bottom: 343,
      },
      {
        label: 'TOTAL DEPOSITED IN RESPECT OF THE DEDUCTEE',
        left: 210,
        right: 284,
        top: 348,
        bottom: 365,
      },
      {
        label: 'PART A PLACE',
        left: 156,
        right: 406,
        top: 491,
        bottom: 514,
      },
      {
        label: 'PART A DATE',
        left: 156,
        right: 406,
        top: 522,
        bottom: 545,
      },
      {
        label: 'DESIGNATION',
        left: 101,
        right: 414,
        top: 552,
        bottom: 574,
      },
      {
        label: 'PART A FULL NAME',
        left: 483,
        right: 852,
        top: 552,
        bottom: 575,
      },
    ],
    
    // PART B

    [
      {
        label: 'PART B Certificate No',
        left: 114,
        right: 350,
        top: 205,
        bottom: 227,
      },
      {
        label: 'PART B Name and Address of Employer/Bank',
        left: 48,
        right: 438,
        top: 263,
        bottom: 367,
      },
      {
        label: 'PART B Pan of deductor',
        left: 122,
        right: 222,
        top: 398,
        bottom: 423,
      },
      {
        label: 'PART B Tan of deductor',
        left: 385,
        right: 490,
        top: 398,
        bottom: 423,
      },
      {
        label: 'PART B Pan of Employee',
        left: 660,
        right: 765,
        top: 398,
        bottom: 423,
      },
      {
        label: 'PART B CIT (TDS)',
        left: 40,
        right: 435,
        top: 460,
        bottom: 528,
      },
      {
        label: 'PART B Assessment Year',
        left: 525,
        right: 575,
        top: 485,
        bottom: 508,
      },
      {
        label: 'PART B Period with the Employeer (From)',
        left: 664,
        right: 735,
        top: 488,
        bottom: 512,
      },
      {
        label: 'PART B Period with the Employeer (To)',
        left: 764,
        right: 848,
        top: 488,
        bottom: 512,
      },
      // PART B ANNEXTURE I
      // DETAILS OF SALARY AND OTHER INCOME AND TAX DEDUCTED
      {
        label: 'WHETHER OPTING FOR TAXATION U/S 115BAC',
        left: 662,
        right: 718,
        top: 600,
        bottom: 620, 
      },
      // 1. GROSS SALARY
      {
        label: 'SALARY AS PER PROVISIONS CONTAINED IN SECTION 17(1)',
        left: 550,
        right: 693,
        top: 662,
        bottom: 698, 
      },
      {
        label: 'VALUE OF PERQUISITES UNDER SECTION 17(2)(AS PER FORM NO 12BA, WHEREVER APPLICABLE)',
        left: 550,
        right: 693,
        top: 708,
        bottom: 738, 
      },
      {
        label: 'PROFITS IN LIEU OF SALARY UNDER SECTION 17(3)(AS PER FORM NO 12BA, WHEREVER APPLICABLE)',
        left: 550,
        right: 693,
        top: 748,
        bottom: 779, 
      },
      {
        label: 'GROSS SALARY (d) TOTAL',
        left: 720,
        right: 861,
        top: 786,
        bottom: 807, 
      },
      {
        label: 'REPORTED TOTAL AMOUNT OF SALARY RECEIVED FROM OTHER EMPLOYER(S)',
        left: 720,
        right: 861,
        top: 815,
        bottom: 845, 
      },
      // 2. LESS: ALLOWANCES TO THE EXTENT EXEMPT UNDER SECTION 10
      {
        label: 'TRAVEL CONCESSION OR ASSITANCE UNDER SECTION 10(5)',
        left: 550,
        right: 693,
        top: 892,
        bottom: 922, 
      },
      {
        label: 'DEATH-CUM-RETIREMENT GRATUITY UNDER SECTION 10(10)',
        left: 550,
        right: 693,
        top: 940,
        bottom: 980, 
      },
      {
        label: 'COMMUTED VALUE OF PENSION UNDER SECTION 10(10A)',
        left: 550,
        right: 693,
        top: 1008,
        bottom: 1045, 
      },
      {
        label: 'CASH EQUIVALENT OF LEAVE SALARY ENCASHMENT UNDER SECTION 10(10AA)',
        left: 550,
        right: 693,
        top: 1062,
        bottom: 1095, 
      },
      {
        label: 'HOUSE RENT ALLOWANCE UNDER SECTION 10(13A)',
        left: 550,
        right: 693,
        top: 1106,
        bottom: 1140, 
      },
    ],
    // GROSS SALARY PAGE 2
    [
      {
        label: 'AMOUNT OF ANY EXEMPTIONS UNDER SECTION 10',
        left: 550,
        right: 693,
        top: 80,
        bottom: 180, 
      },
      {
        label: 'TOTAL AMOUNT OF ANY OTHER EXEMPTION UNDER SECTION 10',
        left: 550,
        right: 693,
        top: 195,
        bottom: 230, 
      },
      {
        label: 'TOTAL AMOUNT OF EXEMPTION CLAIMED UNDER SECTION 10',
        left: 705,
        right: 861,
        top: 238,
        bottom: 290, 
      },
      {
        label: 'TOTAL AMOUNT OF SALARY RECEIVED FROM CURRENT EMPLOYER',
        left: 705,
        right: 861,
        top: 298,
        bottom: 338, 
      },
      // 4 LESS DEDUCTIONS UNDER SECTION 16
      {
        label: 'STANDAR DEDUCTION UNDER SECTION 16(ia)',
        left: 550,
        right: 693,
        top: 370,
        bottom: 392, 
      },
      {
        label: 'ENTERTAINMENT ALLOWANCE UNDER SECTION 16(ii)',
        left: 550,
        right: 693,
        top: 400,
        bottom: 432, 
      },
      {
        label: 'TAX ON EMPLOYEMENT UNDER SECTION 16(iii)',
        left: 550,
        right: 693,
        top: 440,
        bottom: 463, 
      },
      // 5
      {
        label: 'TOTAL AMOUNT OF DEDUCTIONS UNDER SECTION 16',
        left: 705,
        right: 861,
        top: 470,
        bottom: 508, 
      },
      {
        label: 'INCOME CHARGABLE UNDER THE HEAD "SALARIES"',
        left: 705,
        right: 861,
        top: 518,
        bottom: 564, 
      },
      // 7 ADD ANY OTHER INCOME REPORTED BY THE EMPLOYEE UNDER AS PER SECTION 192(2B)
      {
        label: 'INCOME (OR ADMISSIBLE LOSS) FROM HOUSE PROPERTY REPORTED BY EMPLOYEE OFFERED FOR TDS',
        left: 550,
        right: 693,
        top: 605,
        bottom: 650, 
      },
      {
        label: 'INCOME UNDER THE HEAD OTHER SOURCES OFFERED FOR TDS',
        left: 550,
        right: 693,
        top: 662,
        bottom: 696, 
      },
      // 8
      {
        label: 'TOTAL AMOUNT OF OTHER INCOME REPORTED BY THE EMPLOYEE',
        left: 705,
        right: 861,
        top: 706,
        bottom: 738, 
      },
      // 9 GROSS TOTAL INCOME
      {
        label: 'GROSS TOTAL INCOME',
        left: 705,
        right: 861,
        top: 747,
        bottom: 771, 
      },
      // 10 DEDUCTION UNDER CHAPTER VI-A
      // a
      {
        label: 'DEDUCTIONS IN RESPECT OF LIFE INSURANCE PREMIA, CONTRIBUTIONS TO PF, ETC UNDER SECTION 80C GROSS AMOUNT',
        left: 550,
        right: 693,
        top: 816,
        bottom: 860, 
      },
      {
        label: 'DEDUCTIONS IN RESPECT OF LIFE INSURANCE PREMIA, CONTRIBUTIONS TO PF, ETC UNDER SECTION 80C DEDUCTIBLE AMOUNT',
        left: 705,
        right: 861,
        top: 816,
        bottom: 860, 
      },
      // b
      {
        label: 'DEDUCTIONS IN RESPECT OF CONTRIBUTION TO CERTAIN PENSION FUNDS UNDER SECTION 80CCC GROSS AMOUNT',
        left: 550,
        right: 693,
        top: 875,
        bottom: 922, 
      },
      {
        label: 'DEDUCTIONS IN RESPECT OF CONTRIBUTION TO CERTAIN PENSION FUNDS UNDER SECTION 80CCC DEDUCTIBLE AMOUNT',
        left: 705,
        right: 861,
        top: 875,
        bottom: 922, 
      },
      // c
      {
        label: 'DEDUCTIONS IN RESPECT OF CONTRIBUTION BY TAXPAYER TO PENSION SCHEME UNDER SECTION 80CCD(1) GROSS AMOUNT',
        left: 550,
        right: 693,
        top: 932,
        bottom: 985, 
      },
      {
        label: 'DEDUCTIONS IN RESPECT OF CONTRIBUTION TO CERTAIN PENSION FUNDS UNDER SECTION 80CCC DEDUCTIBLE AMOUNT',
        left: 705,
        right: 861,
        top: 932,
        bottom: 985, 
      },
      // d
      {
        label: 'TOTAL DEDUCTIONS UNDER SECTION 80C, 80CCC, 80CCD(1) GROSS AMOUNT',
        left: 550,
        right: 693,
        top: 995,
        bottom: 1042, 
      },
      {
        label: 'TOTAL DEDUCTIONS UNDER SECTION 80C, 80CCC, 80CCD(1) DEDUCTIBLE AMOUNT',
        left: 705,
        right: 861,
        top: 995,
        bottom: 1042, 
      },
      // e
      {
        label: 'DEDUCTIONS IN RESPECT OF AMOUNT PAID/DEPOSITED TO NOTIFIED PENSION SCHEME UNDER 80CCD(1B) GROSS AMOUNT',
        left: 550,
        right: 693,
        top: 1060,
        bottom: 1120, 
      },
      {
        label: 'DEDUCTIONS IN RESPECT OF AMOUNT PAID/DEPOSITED TO NOTIFIED PENSION SCHEME UNDER 80CCD(1B) DEDUCTIBLE AMOUNT',
        left: 705,
        right: 861,
        top: 1060,
        bottom: 1120, 
      },
    ],
    // PART B 3
    [
      // f
      {
        label: 'DEDUCTIONS IN RESPECT OF CONTRIBUTION BY THE EMPLOYER TO PENSION SCHEME UNDER SECTION 80CCD(2) GROSS AMOUNT',
        left: 528,
        right: 693,
        top: 85,
        bottom: 130, 
      },
      {
        label: 'DEDUCTIONS IN RESPECT OF CONTRIBUTION BY THE EMPLOYER TO PENSION SCHEME UNDER SECTION 80CCD(2) DEDUCTIBLE AMOUNT',
        left: 706,
        right: 861,
        top: 85,
        bottom: 130, 
      },
      // g
      {
        label: 'DEDUCTIONS IN RESPECT OF HEALTH INSURANCE PREMIA UNDER SECTION 80D GROSS AMOUNT',
        left: 528,
        right: 693,
        top: 150,
        bottom: 200, 
      },
      {
        label: 'DEDUCTIONS IN RESPECT OF HEALTH INSURANCE PREMIA UNDER SECTION 80D DEDUCTIBLE AMOUNT',
        left: 706,
        right: 861,
        top: 150,
        bottom: 200, 
      },
      // h
      {
        label: 'DEDUCTIONS IN RESPECT OF INTEREST ON LOAN TAKEN FOR HIGHER EDUCATION UNDER SECTION 80E GROSS AMOUNT',
        left: 528,
        right: 693,
        top: 216,
        bottom: 270, 
      },
      {
        label: 'DEDUCTIONS IN RESPECT OF INTEREST ON LOAN TAKEN FOR HIGHER EDUCATION UNDER SECTION 80E DEDUCTIBLE AMOUNT',
        left: 706,
        right: 861,
        top: 216,
        bottom: 270, 
      },
      // i
      {
        label: 'TOTAL DEDUCTIONS IN RESPECT OF DONATIONS TO CERTAIN FUNDS, CHARITABLE INSTITUTIONS UNDER SECTION 80G GROSS AMOUNT',
        left: 540,
        right: 637,
        top: 328,
        bottom: 360, 
      },
      {
        label: 'TOTAL DEDUCTIONS IN RESPECT OF DONATIONS TO CERTAIN FUNDS, CHARITABLE INSTITUTIONS UNDER SECTION 80G QUALIFYING AMOUNT',
        left: 641,
        right: 748,
        top: 328,
        bottom: 360, 
      },
      {
        label: 'TOTAL DEDUCTIONS IN RESPECT OF DONATIONS TO CERTAIN FUNDS, CHARITABLE INSTITUTIONS UNDER SECTION 80G DEDUCTIBLE AMOUNT',
        left: 754,
        right: 861,
        top: 328,
        bottom: 360, 
      },
      // j
      {
        label: 'DEDUCTION IN RESPECT OF INTEREST ON DEPOSITS IN SAVINGS ACCOUNT UNDER SECTION 80TTA GROSS AMOUNT',
        left: 540,
        right: 637,
        top: 374,
        bottom: 410, 
      },
      {
        label: 'DEDUCTION IN RESPECT OF INTEREST ON DEPOSITS IN SAVINGS ACCOUNT UNDER SECTION 80TTA QUALIFYING AMOUNT',
        left: 641,
        right: 748,
        top: 374,
        bottom: 410, 
      },
      {
        label: 'DEDUCTION IN RESPECT OF INTEREST ON DEPOSITS IN SAVINGS ACCOUNT UNDER SECTION 80TTA DEDUCTIBLE AMOUNT',
        left: 754,
        right: 861,
        top: 374,
        bottom: 410, 
      },
      // k
      {
        label: 'AMOUNT DEDUCTIBLE UNDER ANY OTHER PROVISION(S) OF CHAPTER VI-A',
        left: 532,
        right: 858,
        top: 421,
        bottom: 500, 
      },
      // l
      {
        label: 'TOTAL OF AMOUNT DEDUCTIBLE UNDER ANY OTHER PROVISION(S) OF CHAPTER VI-A GROSS AMOUNT',
        left: 540,
        right: 637,
        top: 512,
        bottom: 550, 
      },
      {
        label: 'TOTAL OF AMOUNT DEDUCTIBLE UNDER ANY OTHER PROVISION(S) OF CHAPTER VI-A QUALIFYING AMOUNT',
        left: 641,
        right: 748,
        top: 512,
        bottom: 550, 
      },
      {
        label: 'TOTAL OF AMOUNT DEDUCTIBLE UNDER ANY OTHER PROVISION(S) OF CHAPTER VI-A DEDUCTIBLE AMOUNT',
        left: 754,
        right: 861,
        top: 512,
        bottom: 550, 
      },
      // 11
      {
        label: 'AGGREGATE OF DEDUCTIBLE AMOUNT UNDER CHAPTER VI-A',
        left: 550,
        right: 861,
        top: 568,
        bottom: 610, 
      },
      // 12 TOTAL TAXABLE INCOME
      {
        label: 'TOTAL TAXABLE INCOME',
        left: 550,
        right: 861,
        top: 628,
        bottom: 656, 
      },
      // 13
      {
        label: 'TAX ON TOTAL INCOME',
        left: 550,
        right: 861,
        top: 664,
        bottom: 692, 
      },
      // 14
      {
        label: 'REBATE UNDER SECTION 87A, IF APPLICABLE',
        left: 550,
        right: 861,
        top: 703,
        bottom: 731, 
      },
      // 15
      {
        label: 'SURCHAGRE WHEREVER APPLICABLE',
        left: 550,
        right: 861,
        top: 740,
        bottom: 770, 
      },
      // 16
      {
        label: 'HEALTH AND EDUCATION CESS',
        left: 550,
        right: 861,
        top: 780,
        bottom: 812, 
      },
      // 17 TAX PAYABLE
      {
        label: 'HEALTH AND EDUCATION CESS',
        left: 550,
        right: 861,
        top: 823,
        bottom: 850, 
      },
      // 18
      {
        label: 'LESS RELIEF UNDER SECTION 89',
        left: 550,
        right: 861,
        top: 866,
        bottom: 902, 
      },
      // 19 NET TAX PAYABLE
      {
        label: 'NET TAX PAYABLE',
        left: 550,
        right: 861,
        top: 920,
        bottom: 960, 
      },
      // VERIFICATION
      {
        label: 'VERIFICATION PLACE',
        left: 140,
        right: 472,
        top: 1066,
        bottom: 1086, 
      },
      {
        label: 'VERIFICATION DATE',
        left: 140,
        right: 472,
        top: 1094,
        bottom: 1122, 
      },
      {
        label: 'VERIFICATION FULL NAME',
        left: 547,
        right: 854,
        top: 1095,
        bottom: 1122, 
      },
    ]
  ];
  

module.exports = pageSlices;