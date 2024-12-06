Search.setIndex({"docnames": ["PiximiConverter", "annotation-guide", "classification", "classify-example-eukaryotic-image", "create-cell-crops-with-cellprofiler", "hyperparameters", "intro", "main-menu", "measurements", "segmentation", "technical-faq", "work-in-progress"], "filenames": ["PiximiConverter.ipynb", "annotation-guide.md", "classification.md", "classify-example-eukaryotic-image.md", "create-cell-crops-with-cellprofiler.md", "hyperparameters.md", "intro.md", "main-menu.md", "measurements.md", "segmentation.md", "technical-faq.md", "work-in-progress.md"], "titles": ["Example notebook - converting a Piximi classification model for use outside Piximi", "The Annotator", "Classification", "Image Classification", "Object Classification", "Hyperparameters", "Images to Discovery", "Main menu (left)", "Measurements", "Segmentation", "Technical FAQ", "Known issues"], "terms": {"an": [0, 4, 5, 6, 10], "obviou": 0, "downsid": 0, "your": [0, 1, 3, 4, 5, 6, 7, 10], "analysi": [0, 7], "browser": [0, 6, 7, 10], "amount": 0, "data": [0, 5, 6, 10], "ar": [0, 3, 4, 5, 6, 7], "need": [0, 3, 6, 10], "all": [0, 5, 10], "fit": [0, 3, 10], "now": [0, 3, 4], "might": [0, 10], "therefor": [0, 4, 5], "choos": [0, 4, 5, 7], "train": [0, 4, 5, 6, 11], "classifi": [0, 3, 4, 10], "subset": [0, 3, 5], "export": 0, "elsewher": 0, "The": [0, 3, 4, 5, 10], "can": [0, 1, 3, 4, 5, 6, 7, 11], "file": [0, 4, 7, 10], "python": 0, "happi": 0, "input_json_nam": 0, "bbbc013nocropyesrescal": 0, "simplecnn": [0, 10], "json": [0, 10], "name": [0, 4], "needs_convers": 0, "fals": 0, "do": [0, 3, 5, 7], "creat": [0, 1, 6, 7], "compat": 0, "h5": 0, "have": [0, 3, 4, 5, 6], "alreadi": [0, 3], "so": [0, 4, 5, 10], "should_rescal": 0, "true": 0, "should": [0, 5], "min": 0, "max": [0, 10], "rescal": 0, "befor": [0, 4, 5, 10], "infer": 0, "output_h5_nam": 0, "want": 0, "kera": 0, "files_to_run": 0, "piximiconvertunrescaled2chan": 0, "tiff": 0, "A": [0, 5, 10], "glob": 0, "pass": 0, "find": [0, 3, 6], "return_named_list": 0, "return": 0, "list": 0, "class": [0, 4, 5, 6], "rather": [0, 3], "than": [0, 3, 4], "arrai": 0, "requir": [0, 5, 6], "set": [0, 3, 4, 5, 6, 7, 10], "class_label": 0, "cytoplasmicgfp": [0, 4], "nogfp": [0, 4], "nucleargfp": [0, 4], "label": [0, 3], "order": [0, 6], "Not": 0, "return_name_list": 0, "pip": 0, "instal": [0, 6], "tensorflowj": 0, "skimag": 0, "import": [0, 6], "tf": 0, "numpi": 0, "tensorflowjs_convert": 0, "input_format": 0, "tfjs_layers_model": 0, "output_format": 0, "piximi_model": 0, "load_model": 0, "summari": 0, "def": 0, "load_imag": 0, "imnam": 0, "reorder": 0, "inputdim": 0, "im": 0, "util": 0, "img_as_float": 0, "io": 0, "imread": 0, "moveaxi": 0, "0": [0, 3, 4, 5], "1": [0, 5, 10], "exposur": 0, "rescale_intens": 0, "newim": 0, "zero": 0, "shape": 0, "ch": 0, "rang": [0, 5, 6], "transform": 0, "resize_local_mean": 0, "2": [0, 5, 10], "3": [0, 5, 10], "prepare_for_classif": 0, "image_list": 0, "loaded_model": 0, "imlist": 0, "dim": 0, "input_shap": 0, "resiz": [0, 1], "each": [0, 4, 5], "one": [0, 1, 5, 7], "after": [0, 4, 10], "becaus": 0, "weird": 0, "behavior": 0, "happen": 0, "append": 0, "return_classif": 0, "list_of_class_nam": 0, "prediction_arrai": 0, "probabl": 0, "predict": [0, 5, 6], "argmax": 0, "axi": 0, "class_name_dict": 0, "index": 0, "x": 0, "vector": 0, "get": [0, 3, 5, 7], "recurs": 0, "sort": 0, "print": 0, "count": 0, "els": 0, "uniqu": 0, "return_count": 0, "len": 0, "f": 0, "piximi": [1, 3, 4, 5, 7, 11], "quickli": 1, "multichannel": [1, 4, 6], "multiplan": [1, 6], "imag": [1, 2, 5, 7, 10], "below": [1, 4, 5], "showcas": 1, "some": [1, 5, 7], "differ": [1, 5, 7], "tool": [1, 6, 7], "offer": [1, 5, 6], "varieti": [1, 6], "wai": [1, 5, 6, 10], "make": [1, 5, 6, 10], "furthermor": 1, "enabl": [1, 4, 10], "user": [1, 4, 5, 6, 10], "delet": [1, 10], "specif": [1, 3, 6, 10], "ad": [1, 4, 6], "togeth": 1, "from": [1, 3, 4, 5, 6, 7], "anoth": [1, 3], "two": [1, 3, 4, 10], "come": [2, 8, 9], "soon": [2, 8, 9], "see": [2, 3, 4, 5, 6], "our": [2, 5, 6], "tutori": 2, "object": 2, "more": [2, 3, 4, 5, 6], "inform": [2, 4, 5, 6, 10], "we": [2, 3, 4, 5, 6, 10], "build": 2, "out": [2, 5, 7], "thi": [2, 3, 4, 5, 6, 7, 10, 11], "page": [2, 3], "To": [3, 4, 7, 10], "begin": [3, 4], "exampl": [3, 4, 5, 6, 7, 10, 11], "dataset": [3, 4, 10], "includ": [3, 4, 6, 10, 11], "press": [3, 10], "open": [3, 4, 6, 7, 10], "top": 3, "left": 3, "select": [3, 4, 6, 10], "project": [3, 4, 7, 11], "human": 3, "u2o": [3, 4], "cell": [3, 6], "start": [3, 5, 6], "altern": [3, 4, 7], "you": [3, 4, 5, 6, 7, 10, 11], "would": [3, 4, 5, 6, 11], "like": [3, 5, 6, 11], "own": [3, 5], "go": [3, 10], "new": [3, 4, 7, 10], "correspond": 3, "co": 3, "express": [3, 4], "arrestin": 3, "gfp": [3, 4], "orphan": 3, "gpcr": 3, "upon": [3, 6], "receptor": 3, "stimul": 3, "recruit": 3, "plasma": 3, "membran": 3, "eventu": 3, "endocytos": 3, "result": [3, 4, 5], "vesicl": 3, "structur": 3, "In": [3, 4, 5, 6], "categori": [3, 4, 6, 7], "sub": [3, 4], "menu": 3, "hand": 3, "side": 3, "defin": [3, 4, 5, 6], "turn": [3, 5, 10], "off": 3, "displai": [3, 10], "under": [3, 4], "given": [3, 5, 10], "click": [3, 4, 5, 6], "filter": 3, "icon": 3, "right": [3, 4], "panel": 3, "toggl": 3, "interest": [3, 4], "By": [3, 4, 6], "unknown": 3, "repres": [3, 4], "uncategor": [3, 6], "which": [3, 4, 5, 6, 10], "belong": [3, 6], "later": [3, 7, 10], "posit": [3, 4], "control": [3, 5], "vesicular": 3, "neg": [3, 4], "cytoplasm": [3, 4], "explor": [3, 4, 5, 7, 11], "particular": [3, 5, 6], "show": 3, "hide": 3, "onli": [3, 4, 10], "those": [3, 5], "ensur": 3, "current": [3, 4, 6, 10, 11], "deselect": 3, "Then": [3, 4], "singl": [3, 4], "best": [3, 5], "onc": [3, 10], "same": [3, 4], "button": 3, "learn": [3, 4, 6, 7], "task": 3, "proce": 3, "custom": 3, "within": [3, 4, 5, 6], "variou": [3, 5], "paramet": [3, 4, 10], "adjust": [3, 4, 5], "percentag": 3, "field": [3, 4], "valu": [3, 5], "fraction": 3, "annot": [3, 10], "us": [3, 5, 6, 7, 11], "remaind": 3, "test": [3, 4], "how": [3, 4, 11], "well": [3, 5, 10], "previous": [3, 4, 10], "seen": 3, "default": [3, 4], "look": [3, 5, 6, 10], "try": [3, 7, 11], "link": [3, 5, 6], "input": [3, 4, 6], "appli": [3, 6], "ha": [3, 4, 5], "examin": [3, 6], "compar": [3, 5], "answer": 3, "At": [3, 5], "bottom": 3, "graph": 3, "updat": 3, "loss": [3, 10], "over": 3, "increment": 3, "histori": 3, "success": 3, "measur": [3, 5, 6], "mani": [3, 5], "time": [3, 5], "entir": [3, 4, 5, 6, 10], "studi": [3, 5], "deep": [3, 4, 5, 6], "As": [3, 5], "number": [3, 5, 6, 10], "increas": [3, 5], "optim": [3, 10], "itself": [3, 5], "improv": [3, 5], "perform": [3, 4, 5, 10], "howev": [3, 5, 10], "doe": 3, "necessarili": [3, 5], "lead": [3, 5], "better": [3, 5], "instead": [3, 4, 5], "overfit": [3, 5], "here": [3, 4, 5, 6], "read": [3, 5], "about": [3, 5, 7], "calcul": [3, 5], "ratio": 3, "between": [3, 4, 5], "correct": [3, 5], "total": 3, "case": 3, "refer": 3, "correctli": 3, "determin": [3, 4, 5, 6], "frac": 3, "text": [3, 4], "when": [3, 4, 5, 7, 10], "If": [3, 4, 5, 6], "notic": 3, "decreas": 3, "continu": [3, 7], "mean": [3, 5], "lose": [3, 10], "abil": 3, "accur": 3, "pick": 3, "up": [3, 10], "featur": [3, 4, 6], "nois": 3, "relev": 3, "essenc": [3, 5], "memor": 3, "question": 3, "scratch": [3, 4], "metric": [3, 10], "depict": 3, "respect": 3, "summat": 3, "error": [3, 5], "made": [3, 4, 5, 6, 10], "dure": [3, 5, 6, 7, 10], "exit": 3, "dialog": [3, 10], "been": [3, 4, 5, 6, 10], "evalu": [3, 10], "depth": [3, 5], "run": [3, 6], "unannot": 3, "color": [3, 4], "thumbnail": 3, "stage": [3, 6], "mai": [3, 5, 10], "inspect": 3, "either": [3, 4], "accept": 3, "hold": 3, "reject": 3, "them": [3, 5, 7, 10], "clear": 3, "depend": 3, "further": 3, "base": [3, 4, 6], "desir": [3, 4, 5], "bbbc016": 3, "licens": [3, 4], "creativ": [3, 4], "common": [3, 4], "attribut": [3, 4], "unport": [3, 4], "ilya": [3, 4], "ravkin": [3, 4], "work": [4, 5, 6, 10], "segment": [4, 6, 7], "individu": 4, "other": 4, "region": [4, 6], "approach": 4, "record": 4, "phenotyp": 4, "subpopul": 4, "larger": 4, "heterogen": 4, "popul": 4, "while": 4, "s": [4, 6, 7, 10], "possibl": [4, 5], "These": [4, 5, 6], "categor": [4, 6], "follow": 4, "demonstr": 4, "were": [4, 5, 10], "recreat": 4, "bbbc013": 4, "nucleu": 4, "transloc": 4, "broad": 4, "bioimag": 4, "benchmark": 4, "collect": 4, "signal": 4, "consid": 4, "nuclear": 4, "pipelin": 4, "download": [4, 10], "version": 4, "For": [4, 5, 6, 10], "guid": [4, 5], "first": [4, 6, 10], "identifi": 4, "nuclei": [4, 6], "modul": 4, "identif": 4, "rgb": 4, "dna": 4, "blue": 4, "green": 4, "final": [4, 7, 10], "mulltichannel": 4, "drag": [4, 7], "drop": [4, 7], "appropri": 4, "rule": 4, "namesandtyp": 4, "contain": [4, 10], "channel2": 4, "filenam": 4, "assign": 4, "rawdna": 4, "channel1": 4, "rawgfp": 4, "channel": 4, "add": [4, 6], "primari": 4, "accordingli": 4, "achiev": 4, "mode": 4, "adequ": 4, "secondari": 4, "sinc": 4, "inconsist": 4, "distanc": 4, "n": 4, "method": [4, 5, 6], "10": 4, "output": [4, 5, 6], "gfpanddna": 4, "colortograi": 4, "It": [4, 10], "directori": 4, "save": [4, 7, 10], "screenshot": 4, "addit": [4, 6, 10], "allow": [4, 5, 6], "origin": 4, "also": [4, 6, 7, 10, 11], "provid": [4, 5, 6, 10], "option": [4, 10], "nest": 4, "folder": 4, "pleas": [4, 6, 10], "section": 4, "without": [4, 6], "subdirectori": 4, "metadata": 4, "extract": 4, "subfold": 4, "path": 4, "chang": [4, 5, 7, 11], "abov": [4, 5], "mention": 4, "modifi": [4, 10], "ye": [4, 10], "mark": 4, "regular": 4, "p": 4, "last": 4, "why": 4, "portion": 4, "unabl": 4, "reconcil": 4, "none": 4, "across": [4, 6, 10], "box": 4, "accommod": 4, "problem": [4, 5, 11], "distinct": [4, 6], "impact": [4, 5, 11], "configur": 5, "variabl": 5, "process": [5, 6, 10], "neural": 5, "network": 5, "yield": 5, "cannot": [5, 10], "estim": 5, "intuit": [5, 6], "difficult": 5, "everi": 5, "introduc": 5, "avail": [5, 7, 10], "consider": [5, 10], "ultim": [5, 6], "goal": 5, "tune": 5, "interact": 5, "influenc": 5, "classif": [5, 6, 7, 10], "tensorflow": [5, 10], "playground": 5, "tricki": 5, "hard": 5, "strict": 5, "recommend": [5, 10], "observ": 5, "give": [5, 6], "rough": 5, "feel": 5, "magnitud": 5, "intend": 5, "point": [5, 6], "familiar": 5, "support": 5, "multipl": 5, "d": 5, "brief": 5, "what": [5, 6, 7], "gener": [5, 7, 10], "typic": 5, "fold": 5, "good": 5, "01": 5, "03": 5, "sensibl": 5, "slightli": [5, 10], "similar": 5, "plai": 5, "around": 5, "thei": [5, 6, 10], "check": 5, "overview": 5, "32": 5, "64": 5, "16": 5, "least": 5, "largest": 5, "reason": [5, 10], "frame": 5, "eg": 5, "20": 5, "minut": 5, "automat": [5, 6], "respons": 5, "expect": 5, "bring": 5, "closer": 5, "introduct": 5, "wa": 5, "lower": 5, "wherea": 5, "poor": 5, "higher": 5, "tell": 5, "aforement": [5, 6], "reduc": [5, 11], "much": 5, "repeat": 5, "next": 5, "until": 5, "analyz": 5, "end": [5, 10], "ground": 5, "truth": 5, "close": [5, 10], "comparison": 5, "applic": [6, 10], "minim": 6, "setup": 6, "vision": 6, "releas": 6, "group": 6, "launch": 6, "activ": 6, "progress": [6, 7], "re": [6, 10], "choic": 6, "manual": [6, 10], "pen": 6, "quick": 6, "both": [6, 10], "easili": 6, "sure": [6, 10], "place": 6, "where": [6, 7], "futur": [6, 10], "aim": 6, "z": 6, "plane": 6, "interpol": 6, "3d": 6, "even": [6, 10], "easier": 6, "subject": 6, "matter": 6, "bacteria": 6, "cultur": 6, "insect": 6, "power": 6, "small": 6, "comput": [6, 7], "understand": 6, "teach": 6, "g1": 6, "g2": 6, "m": 6, "phase": 6, "cycl": 6, "intens": 6, "model": 6, "through": 6, "pattern": 6, "reli": 6, "highli": [6, 10], "customiz": 6, "larg": 6, "present": 6, "prepar": 6, "function": 6, "develop": 6, "ani": [6, 10], "think": [6, 10], "discuss": 6, "github": 6, "repo": [6, 10], "abl": 7, "previou": 7, "access": 7, "brows": 7, "ui": 7, "help": [7, 11], "document": 7, "send": 7, "feedback": 7, "local": [7, 10], "compress": 7, "zip": 7, "share": 7, "load": [7, 10], "directli": 7, "uncompress": 7, "zarr": 7, "simpli": 7, "o": 7, "There": [7, 10], "trai": 10, "mechan": 10, "auto": 10, "period": 10, "state": 10, "preprocess": 10, "architectur": 10, "weight": 10, "reload": 10, "its": 10, "paramat": 10, "bin": 10, "visit": 10, "long": 10, "refresh": 10, "tab": 10, "serv": 10, "docker": 10, "instruct": 10, "main": 10, "readm": 10, "sourc": 10, "code": 10, "necessari": 10, "app": 10, "No": 10, "telemetri": 10, "extern": 10, "api": 10, "call": 10, "convolut": 10, "layer": 10, "pool": 10, "dens": 10, "initi": 10, "random": 10, "mobilenetv1": 10, "mobilenet_v1_0": 10, "25_224": 10, "pre": 10, "rest": 10, "frozen": 10, "keep": 10, "hit": 10, "accuraci": 10, "remain": 10, "leav": 10, "enter": 10, "via": 10, "avoid": 10, "js": 10, "webgl": 10, "chrome": 10, "prefer": 10, "advanc": 10, "system": 10, "hardwar": 10, "acceler": 10, "major": 10, "valid": 10, "second": 10, "ident": 10, "4": 10, "5": 10, "6": 10, "independ": 10, "still": 10, "due": 10, "certain": 10, "step": 10, "draw": 10, "shuffl": 10, "stabil": 10, "frequent": 10, "alwai": 10, "old": 10, "again": 10, "hasn": 10, "t": 10, "appl": 11, "caus": 11, "crash": 11, "batch": 11, "size": 11, "allevi": 11, "lightweight": 11, "mnist": 11, "hyperparamet": 11}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"exampl": 0, "notebook": 0, "convert": 0, "piximi": [0, 6, 10], "classif": [0, 2, 3, 4], "model": [0, 3, 5, 10], "us": [0, 4, 10], "outsid": 0, "step": [0, 4, 6], "walkthrough": 0, "chang": 0, "paramet": [0, 5], "cell": [0, 4], "below": 0, "Then": 0, "simpli": 0, "run": [0, 10], "rest": 0, "If": [0, 10], "you": 0, "re": 0, "comfort": 0, "appli": 0, "tensorflow": 0, "s": 0, "done": 0, "we": 0, "ve": 0, "provid": 0, "some": 0, "conveni": 0, "function": [0, 5], "The": [1, 6], "annot": [1, 6], "process": 1, "add": 1, "subtract": 1, "intersect": 1, "select": [1, 5], "color": 1, "quick": 1, "rectangular": 1, "ellipt": 1, "polygon": 1, "pen": 1, "lasso": 1, "imag": [3, 4, 6], "1": [3, 4], "load": 3, "2": [3, 4], "categor": 3, "3": [3, 4], "train": [3, 10], "what": [3, 10], "an": 3, "epoch": [3, 5], "valid": 3, "accuraci": 3, "vs": 3, "4": [3, 4], "predict": 3, "class": 3, "unlabel": 3, "data": 3, "copyright": [3, 4], "object": 4, "creat": 4, "crop": 4, "cellprofil": 4, "import": 4, "identifyprimaryobject": 4, "identifysecondaryobject": 4, "graytocolor": 4, "5": 4, "savecroppedobject": 4, "note": 4, "extra": 4, "consider": 4, "earlier": 4, "6": 4, "next": [4, 6], "hyperparamet": 5, "descript": 5, "optim": 5, "algorithm": 5, "loss": 5, "learn": 5, "rate": 5, "batch": 5, "size": 5, "how": [5, 10], "doe": [5, 10], "updat": 5, "its": 5, "intern": 5, "discoveri": 6, "known": [6, 11], "issu": [6, 11], "classifi": 6, "main": 7, "menu": 7, "left": 7, "measur": 8, "segment": 9, "technic": 10, "faq": 10, "crash": 10, "can": 10, "i": 10, "recov": 10, "my": 10, "project": 10, "offlin": 10, "Is": 10, "log": 10, "ar": 10, "internet": 10, "connect": 10, "lost": 10, "while": 10, "possibl": 10, "see": 10, "summari": 10, "gpu": 10, "same": 10, "multipl": 10, "time": 10, "why": 10, "do": 10, "get": 10, "differ": 10, "result": 10, "m1": 11, "processor": 11}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})