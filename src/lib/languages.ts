

export const TRAITS = {
  lineComment: ['//', '#', '%', "'", '--'],
  blockComment: ['none', '/*...*/', '"""..."""', '--[[...]]', '=begin...=end'],
  lineSeparator: [';', '\\n'],
  typeAnnotation: ['none', 'int x', 'x: int', 'x int', 'x As Integer'],
  variableDeclaration: ['x = 1', 'int x = 1', 'x: int = 1', 'val x = 1', 'var x = 1', 'const x = 1', 'let x = 1', 'x := 1', 'x <- 1', '$x = 1', 'my $x = 1', 'Dim x As Integer = 1'],
  functionDefinition: ['def', 'fn', 'fun', 'func', 'function', 'void/int/float/...', 'sub', 'Sub'],
  functionBody: ['{...}', ':\\n\\t...', '...end', '...End Sub'],
  functionReturn: ['return x', 'return(x)', 'x', 'ret x', '<-x'],
  objectMember: ['x.y', 'x["y"]', 'x->y', 'x$y'],
  printLine: ['print(x)', 'console.log(x)', 'echo(x)', 'x', 'puts x', 'print x', 'System.out.println(x)', 'Console.WriteLine(x)', 'cout << x << endl', 'printf("%s\\n", x)', 'fmt.Println(x)', 'println(x)', 'println!(x)', 'Debug.Print(x)', 'disp(x)', 'fprintf(\'%s\\n\',x)'],
} as const

export type Trait = {
  [K in keyof typeof TRAITS]: Array<typeof TRAITS[K][number]>
}

export const languages: Record<string, Trait> = {
  'Java': {
    'lineComment': ['//'],
    'blockComment': ['/*...*/'],
    'lineSeparator': [';'],
    'typeAnnotation': ['int x'],
    'variableDeclaration': ['int x = 1'],
    'functionDefinition': ['void/int/float/...'],
    'functionBody': ['{...}'],
    'functionReturn': ['return x'],
    'objectMember': ['x.y'],
    'printLine': ['System.out.println(x)'],
  },
  'JavaScript': {
    'lineComment': ['//'],
    'blockComment': ['/*...*/'],
    'lineSeparator': [';'],
    'typeAnnotation': ['none'],
    'variableDeclaration': ['var x = 1', 'let x = 1', 'const x = 1'],
    'functionDefinition': ['function'],
    'functionBody': ['{...}'],
    'functionReturn': ['return x'],
    'objectMember': ['x.y'],
    'printLine': ['console.log(x)'],
  },
  'TypeScript': {
    'lineComment': ['//'],
    'blockComment': ['/*...*/'],
    'lineSeparator': [';'],
    'typeAnnotation': ['x: int', 'none'],
    'variableDeclaration': ['x: int = 1'],
    'functionDefinition': ['function'],
    'functionBody': ['{...}'],
    'functionReturn': ['return x'],
    'objectMember': ['x.y'],
    'printLine': ['console.log(x)'],
  },
  'Python': {
    'lineComment': ['#'],
    'blockComment': ['"""..."""'],
    'lineSeparator': ['\\n'],
    'typeAnnotation': ['none', 'int x'],
    'variableDeclaration': ['x = 1'],
    'functionDefinition': ['def'],
    'functionBody': [':\\n\\t...'],
    'functionReturn': ['return x'],
    'objectMember': ['x.y'],
    'printLine': ['print(x)', 'print x'],
  },
  'C++': {
    'lineComment': ['//'],
    'blockComment': ['/*...*/'],
    'lineSeparator': [';'],
    'typeAnnotation': ['int x'],
    'variableDeclaration': ['int x = 1'],
    'functionDefinition': ['void/int/float/...'],
    'functionBody': ['{...}'],
    'functionReturn': ['return x'],
    'objectMember': ['x.y', 'x->y'],
    'printLine': ['cout << x << endl'],
  },
  'C': {
    'lineComment': ['//'],
    'blockComment': ['/*...*/'],
    'lineSeparator': [';'],
    'typeAnnotation': ['int x'],
    'variableDeclaration': ['int x = 1'],
    'functionDefinition': ['void/int/float/...'],
    'functionBody': ['{...}'],
    'functionReturn': ['return x'],
    'objectMember': ['x.y'],
    'printLine': ['printf("%s\\n", x)'],
  },
  'Go': {
    'lineComment': ['//'],
    'blockComment': ['/*...*/'],
    'lineSeparator': [';'],
    'typeAnnotation': ['int x'],
    'variableDeclaration': ['x := 1'],
    'functionDefinition': ['func'],
    'functionBody': ['{...}'],
    'functionReturn': ['<-x'],
    'objectMember': ['x.y'],
    'printLine': ['fmt.Println(x)'],
  },
  'C#': {
    'lineComment': ['//'],
    'blockComment': ['/*...*/'],
    'lineSeparator': [';'],
    'typeAnnotation': ['int x'],
    'variableDeclaration': ['int x = 1'],
    'functionDefinition': ['void/int/float/...'],
    'functionBody': ['{...}'],
    'functionReturn': ['return x'],
    'objectMember': ['x.y'],
    'printLine': ['Console.WriteLine(x)'],
  },
  'PHP': {
    'lineComment': ['//'],
    'blockComment': ['/*...*/'],
    'lineSeparator': [';'],
    'typeAnnotation': ['int x'],
    'variableDeclaration': ['$x = 1'],
    'functionDefinition': ['void/int/float/...'],
    'functionBody': ['{...}'],
    'functionReturn': ['return x'],
    'objectMember': ['x.y'],
    'printLine': ['echo(x)'],
  },
  'Rust': {
    'lineComment': ['//'],
    'blockComment': ['/*...*/'],
    'lineSeparator': [';'],
    'typeAnnotation': ['int x'],
    'variableDeclaration': ['let x = 1'],
    'functionDefinition': ['fn'],
    'functionBody': ['{...}'],
    'functionReturn': ['x', 'return x'],
    'objectMember': ['x.y'],
    'printLine': ['println!(x)'],
  },
  'Ruby': {
    'lineComment': ['#'],
    'blockComment': ['=begin...=end'],
    'lineSeparator': ['\\n'],
    'typeAnnotation': ['none', 'x: int'],
    'variableDeclaration': ['x = 1', 'int x = 1'],
    'functionDefinition': ['def'],
    'functionBody': ['...end'],
    'functionReturn': ['x'],
    'objectMember': ['x.y'],
    'printLine': ['puts x'],
  },
  'Kotlin': {
    'lineComment': ['//'],
    'blockComment': ['/*...*/'],
    'lineSeparator': ['\\n'],
    'typeAnnotation': ['int x'],
    'variableDeclaration': ['val x = 1', 'var x = 1'],
    'functionDefinition': ['fun'],
    'functionBody': ['{...}'],
    'functionReturn': ['return x'],
    'objectMember': ['x.y'],
    'printLine': ['println(x)'],
  },
  'Dart': {
    'lineComment': ['//'],
    'blockComment': ['/*...*/'],
    'lineSeparator': [';'],
    'typeAnnotation': ['int x'],
    'variableDeclaration': ['var x = 1'],
    'functionDefinition': ['void/int/float/...'],
    'functionBody': ['{...}'],
    'functionReturn': ['return x'],
    'objectMember': ['x.y'],
    'printLine': ['print(x)'],
  },
  'Swift': {
    'lineComment': ['//'],
    'blockComment': ['/*...*/'],
    'lineSeparator': [';'],
    'typeAnnotation': ['x: int'],
    'variableDeclaration': ['let x = 1', 'var x = 1'],
    'functionDefinition': ['func'],
    'functionBody': ['{...}'],
    'functionReturn': ['return x'],
    'objectMember': ['x.y'],
    'printLine': ['print(x)'],
  },
  'R': {
    'lineComment': ['#'],
    'blockComment': ['none'],
    'lineSeparator': ['\\n'],
    'typeAnnotation': ['none', 'x: int'],
    'variableDeclaration': ['x <- 1'],
    'functionDefinition': ['function'],
    'functionBody': ['{...}'],
    'functionReturn': ['return(x)'],
    'objectMember': ['x$y'],
    'printLine': ['print(x)'],
  },
  'Lua': {
    'lineComment': ['--'],
    'blockComment': ['--[[...]]'],
    'lineSeparator': [';'],
    'typeAnnotation': ['int x'],
    'variableDeclaration': ['x = 1'],
    'functionDefinition': ['function'],
    'functionBody': ['...end'],
    'functionReturn': ['return x'],
    'objectMember': ['x.y'],
    'printLine': ['print(x)'],
  },
  'Perl': {
    'lineComment': ['#'],
    'blockComment': ['=begin...=end'],
    'lineSeparator': [';'],
    'typeAnnotation': ['int x'],
    'variableDeclaration': ['my $x = 1'],
    'functionDefinition': ['sub'],
    'functionBody': ['{...}'],
    'functionReturn': ['return x'],
    'objectMember': ['x.y'],
    'printLine': ['print(x)'],
  },
  'Visual Basic 6.0': {
    'lineComment': ["'"],
    'blockComment': ['none'],
    'lineSeparator': ['\\n'],
    'typeAnnotation': ['x As Integer'],
    'variableDeclaration': ['Dim x As Integer = 1'],
    'functionDefinition': ['Sub'],
    'functionBody': ['...End Sub'],
    'functionReturn': ['return x'],
    'objectMember': ['x.y'],
    'printLine': ['Debug.Print(x)'],
  },
  'VB.NET': {
    'lineComment': ["'"],
    'blockComment': ['none'],
    'lineSeparator': ['\\n'],
    'typeAnnotation': ['x As Integer'],
    'variableDeclaration': ['Dim x As Integer = 1'],
    'functionDefinition': ['Sub'],
    'functionBody': ['...End Sub'],
    'functionReturn': ['return x'],
    'objectMember': ['x.y'],
    'printLine': ['Console.WriteLine(x)'],
  },
  'MATLAB': {
    'lineComment': ['%'],
    'blockComment': ['none'],
    'lineSeparator': [';'],
    'typeAnnotation': ['none'],
    'variableDeclaration': ['x = 1'],
    'functionDefinition': ['function'],
    'functionBody': ['...end'],
    'functionReturn': ['return x'],
    'objectMember': ['x.y'],
    'printLine': ['disp(x)', 'fprintf(\'%s\\n\',x)'],
  },
}

export type Lang = keyof typeof languages