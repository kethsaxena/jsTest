let emails = [
    "sv@outlook.com",    "gfdpdyf@gmail.com", "n", 
    "wl@hackerrank.com", "tk@outlook.com", "m",
    "gfdpdyf@gmail.com", "sv@outlook.com", "t.xg---n",
    "sv@outlook.com", "gfdpdyf@gmail.com", "i---t.xg---n",
    "tk@outlook.com", "wl@hackerrank.com", "o---m", 
    "tk@outlook.com", "wl@hackerrank.com", "w---o---m",
    "tk@outlook.com", "wl@hackerrank.com", "nv---w---o---m",
    "sv@outlook.com", "gfdpdyf@gmail.com", "cyhf---i---t.xg---n"
    ]
    
    
    const pushString=(emails)=>{
        let main=[],row=[];
    
            for(var n=0;n<emails.length;n++){
                if((n+1)%3==0){
                    row.push(emails[n])
                    main.push(row)
                    row=[]
                }
                else{
                    row.push(emails[n]) 
                }
                
            }
            return main;
    
        
    }
    
    emails=pushString(emails);
    
    
    const buildThreadCounts = emails => {
    
      return emails.reduce((acc, email) => {
        const signatures = email[2].split('---');
        const sig = signatures[signatures.length-1]
        
        if (sig in acc.result) {
          acc.result[sig].messages += 1
        } else {
          acc.result[sig] = {
            thread: acc.threadCount,
            messages: 1,
          }
          acc.threadCount += 1;
        }
    
        acc.output.push([acc.result[sig].thread, acc.result[sig].messages])
    
        return acc;
      }, { threadCount: 1, result: {}, output: []}).output;
      
    }
    
    /*
      {
        'n': {
          thread: 1,
          messages: 2
        } 
      }
    */
    
    console.log(buildThreadCounts(emails))