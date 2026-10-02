// ===== LANDING PAGE =====

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("landingClickMe").addEventListener("click", function() {
    document.getElementById("landingPage").style.display = "none";
    document.getElementById("mainApp").style.display = "flex";
  });
});


// ===== NAVIGATION =====

function showSection(id) {
  document.querySelectorAll(".section").forEach(function(sec) {
    sec.classList.remove("active");
  });
  document.getElementById(id).classList.add("active");

  document.querySelectorAll(".menu-link").forEach(function(link) {
    link.classList.remove("active-menu");
  });
  document.getElementById("nav-" + id).classList.add("active-menu");
}

document.getElementById("nav-home").addEventListener("click", function() { showSection("home"); });
document.getElementById("nav-about").addEventListener("click", function() { showSection("about"); });
document.getElementById("nav-activities").addEventListener("click", function() { showSection("activities"); });


// ===== FOLDER TOGGLES =====

document.getElementById("folder2").addEventListener("click", function() {
  document.getElementById("exercise2List").classList.toggle("hidden");
});

document.getElementById("folder3").addEventListener("click", function() {
  document.getElementById("exercise3List").classList.toggle("hidden");
});

document.getElementById("folder4").addEventListener("click", function() {
  document.getElementById("exercise4List").classList.toggle("hidden");
});


// ===== HELPERS =====

var output = document.getElementById("output");

function print(text) { output.textContent = text; }

function resetExtras() {
  var list = document.getElementById("dynamicList");
  if (list) list.innerHTML = "";
  output.innerHTML = "";
}


// ===== EXERCISE 2 =====

document.querySelectorAll(".activity-item").forEach(function(item) {
  item.addEventListener("click", function() {
    showSection("activities");
    runActivity(this.dataset.activity);
  });
});

function runActivity(activity) {
  resetExtras();

  var activities = {

    "1": function() {
      alert("Welcome to JavaScript!");
      console.log("This is my first JS program.");
      print("Alert displayed.\nThis is my first JS program.");
    },

    "2": function() {
      var name = "Ace", age = 20, isStudent = true;
      print("Name: " + name + "\nAge: " + age + "\nStudent: " + isStudent);
    },

    "3": function() {
      var a = 7, b = 3;
      print("Sum: " + (a+b) + "\nDifference: " + (a-b) + "\nProduct: " + (a*b) + "\nQuotient: " + (a/b));
    },

    "4": function() {
      var name = prompt("Enter your name:");
      var num = prompt("Favorite number:");
      print("Hello " + name + "! Favorite number is " + num);
    },

    "5": function() {
      var age = Number(prompt("Enter age:"));
      print(age >= 18 ? "You are eligible." : "You are not eligible.");
    },

    "6": function() {
      var text = "For loop (1 to 10):\n";
      for (var i = 1; i <= 10; i++) text += i + " ";
      text += "\n\nWhile loop (10 to 1):\n";
      for (var j = 10; j >= 1; j--) text += j + " ";
      print(text);
    },

    "7": function() {
      alert("Button Clicked!");
      print("Button interaction executed.");
    }

  };

  if (activities[activity]) activities[activity]();
}


// ===== EXERCISE 3 =====

document.querySelectorAll(".exercise3-item").forEach(function(item) {
  item.addEventListener("click", function() {
    showSection("activities");
    runExercise3(this.dataset.ex3);
  });
});

var bgColors = ["#a8d8ea","#f9c6c9","#c3f0ca","#fde9a2","#d5c5f7","#ffd9b3","#e0e0e0"];
var bgIdx = 0;
var darkOn = false;

function runExercise3(activity) {
  resetExtras();

  var activities = {

    "1": function() {
      var color = bgColors[bgIdx % bgColors.length];
      bgIdx++;
      document.getElementById("mainApp").style.backgroundColor = color;
      document.body.style.backgroundColor = color;
      print("Background changed to " + color);
    },

    "2": function() {
      darkOn = !darkOn;
      var bg = darkOn ? "#000000" : "#ffffff";
      var fg = darkOn ? "#ffffff" : "#000000";
      document.getElementById("mainApp").style.backgroundColor = bg;
      document.body.style.backgroundColor = bg;
      document.body.style.color = fg;
      print("Dark mode " + (darkOn ? "ON" : "OFF"));
    },

    "3": function() {
      var li = document.createElement("li");
      li.textContent = "New Item";
      document.getElementById("dynamicList").appendChild(li);
      print("New list item added.");
    },

    "4": function() {
      output.innerHTML = "<p id='removable'>This paragraph will be removed.</p>";
      var btn = document.createElement("button");
      btn.textContent = "Remove Paragraph";
      btn.className = "act-btn";
      btn.style.marginTop = "10px";
      btn.addEventListener("click", function() {
        var p = document.getElementById("removable");
        if (p) p.remove();
        btn.remove();
      });
      output.appendChild(btn);
    },

    "5": function() {
      output.innerHTML =
        '<input id="charInput" placeholder="Type here..." class="act-input" style="width:220px;" />' +
        '<div id="charCount" style="margin-top:12px;color:#00ff88;font-size:15px;">Characters: 0</div>';
      document.getElementById("charInput").addEventListener("input", function() {
        document.getElementById("charCount").textContent = "Characters: " + this.value.length;
      });
    },

    "6": function() {
      output.innerHTML =
        '<input id="numA" type="number" placeholder="Number 1" class="act-input" style="width:140px;" />' +
        '<input id="numB" type="number" placeholder="Number 2" class="act-input" style="width:140px;margin-left:8px;" />' +
        '<br><button id="addBtn" class="act-btn" style="margin-top:10px;">Add</button>' +
        '<div id="addResult" style="margin-top:10px;color:#00ff88;font-size:16px;"></div>';
      document.getElementById("addBtn").addEventListener("click", function() {
        var a = Number(document.getElementById("numA").value);
        var b = Number(document.getElementById("numB").value);
        document.getElementById("addResult").textContent = "Result: " + (a + b);
      });
    },

    "7": function() {
      output.innerHTML =
        '<img id="toggleImg" src="images/img1.jpg" alt="demo"' +
        ' style="border-radius:10px;display:block;margin:0 auto 12px;width:280px;height:160px;object-fit:cover;" />' +
        '<div style="text-align:center;">' +
        '<button id="imgToggleBtn" class="act-btn">Change Image</button>' +
        '</div>';
      var tog = false;
      document.getElementById("imgToggleBtn").addEventListener("click", function() {
        tog = !tog;
        document.getElementById("toggleImg").src = tog ? "images/img2.jpg" : "images/img1.jpg";
      });
    },

    "8": function() {
      output.innerHTML =
        '<div style="display:flex;gap:8px;align-items:center;">' +
        '<input id="todoInput" placeholder="New task..." class="act-input" style="width:210px;" />' +
        '<button id="todoAdd" class="act-btn">Add</button>' +
        '</div>';
      document.getElementById("todoAdd").addEventListener("click", function() {
        var input = document.getElementById("todoInput");
        var text = input.value.trim();
        if (!text) return;
        var li = document.createElement("li");
        li.textContent = text;
        document.getElementById("dynamicList").appendChild(li);
        input.value = "";
      });
    }

  };

  if (activities[activity]) activities[activity]();
}


// ===== EXERCISE 4 =====

document.querySelectorAll(".exercise4-item").forEach(function(item) {
  item.addEventListener("click", function() {
    showSection("activities");
    if (this.dataset.ex4 === "1") exercise4();
  });
});

function exercise4() {
  resetExtras();

  var wrapper = document.createElement("div");

  wrapper.innerHTML =
    '<div class="calc-row">' +
      '<label>Number of Quizzes</label>' +
      '<input type="number" id="numQuizzes" min="1">' +
    '</div>' +
    '<div class="calc-row">' +
      '<label>Number of MCOs</label>' +
      '<input type="number" id="numMcos" min="1">' +
    '</div>' +
    '<div class="calc-btns">' +
      '<button id="generateBtn">Generate Fields</button>' +
    '</div>' +
    '<div id="scoreFields"></div>' +
    '<p id="calcResult"></p>';

  output.appendChild(wrapper);

  document.getElementById("generateBtn").addEventListener("click", function() {
    var numQuizzes = parseInt(document.getElementById("numQuizzes").value);
    var numMcos = parseInt(document.getElementById("numMcos").value);

    if (isNaN(numQuizzes) || numQuizzes < 1 || isNaN(numMcos) || numMcos < 1) {
      document.getElementById("calcResult").textContent = "Please enter valid numbers.";
      return;
    }

    var html = "";

    for (var i = 1; i <= numQuizzes; i++) {
      html += '<div class="calc-row"><label>Quiz ' + i + '</label><input type="number" class="quizScore" min="0" max="100"></div>';
    }

    html += '<div class="calc-row"><label>Exam</label><input type="number" id="calcExam" min="0" max="100"></div>';

    for (var j = 1; j <= numMcos; j++) {
      html += '<div class="calc-row"><label>MCO ' + j + '</label><input type="number" class="mcoScore" min="0" max="100"></div>';
    }

    html += '<div class="calc-btns"><button id="calcBtn">Calculate</button><button id="calcReset">Reset</button></div>';

    document.getElementById("scoreFields").innerHTML = html;

    document.getElementById("calcBtn").addEventListener("click", function() {
      var quizFields = document.querySelectorAll(".quizScore");
      var mcoFields = document.querySelectorAll(".mcoScore");
      var exam = parseFloat(document.getElementById("calcExam").value);

      var quizScores = [], mcoScores = [], valid = true;

      quizFields.forEach(function(f) {
        var v = parseFloat(f.value);
        if (isNaN(v) || v < 0 || v > 100) valid = false;
        else quizScores.push(v);
      });

      mcoFields.forEach(function(f) {
        var v = parseFloat(f.value);
        if (isNaN(v) || v < 0 || v > 100) valid = false;
        else mcoScores.push(v);
      });

      if (!valid || isNaN(exam) || exam < 0 || exam > 100) {
        document.getElementById("calcResult").textContent = "Please fill all fields correctly (0-100).";
        return;
      }

      var quizAvg = quizScores.reduce(function(a, b) { return a + b; }, 0) / quizScores.length;
      var mcoAvg = mcoScores.reduce(function(a, b) { return a + b; }, 0) / mcoScores.length;
      var finalGrade = (quizAvg * 0.20) + (exam * 0.30) + (mcoAvg * 0.50);

      var letter;
      if (finalGrade >= 90) letter = "A";
      else if (finalGrade >= 80) letter = "B";
      else if (finalGrade >= 70) letter = "C";
      else if (finalGrade >= 60) letter = "D";
      else letter = "F";

      document.getElementById("calcResult").textContent =
        "Final Grade: " + finalGrade.toFixed(2) + " | Grade: " + letter;
    });

    document.getElementById("calcReset").addEventListener("click", function() {
      document.querySelectorAll(".quizScore, .mcoScore").forEach(function(f) { f.value = ""; });
      document.getElementById("calcExam").value = "";
      document.getElementById("calcResult").textContent = "";
    });
  });
}
