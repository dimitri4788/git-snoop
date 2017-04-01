let ignoreFilesAndDirs = ` ! -path "*.git*"`
+ ` ! -path "*.bmpr"`
+ ` ! -path "*LICENSE*"`
+ ` ! -path "./dist"`
+ ` ! -path "*node_modules*"`
+ ` ! -path "./.idea"`
+ ` ! -path "./.sass-cache"`
+ ` ! -path "./connect.lock"`
+ ` ! -path "./coverage/*"`
+ ` ! -path "./libpeerconnection.log"`
+ ` ! -path "*npm-debug.log*"`
+ ` ! -path "*.DS_Store*"`
+ ` ! -path "*.d"`
+ ` ! -path "*.o"`
+ ` ! -path "*.ko"`
+ ` ! -path "*.obj"`
+ ` ! -path "*.elf"`
+ ` ! -path "*.ilk"`
+ ` ! -path "*.map"`
+ ` ! -path "*.exp"`
+ ` ! -path "*.gch"`
+ ` ! -path "*.pch"`
+ ` ! -path "*.lib"`
+ ` ! -path "*.a"`
+ ` ! -path "*.la"`
+ ` ! -path "*.lo"`
+ ` ! -path "*.dll"`
+ ` ! -path "*.so"`
+ ` ! -path "*.so.*"`
+ ` ! -path "*.dylib"`
+ ` ! -path "*.exe"`
+ ` ! -path "*.out"`
+ ` ! -path "*.app"`
+ ` ! -path "*.i*86"`
+ ` ! -path "*.x86_64"`
+ ` ! -path "*.hex"`
+ ` ! -path "*.dSYM/"`
+ ` ! -path "*.su"`
+ ` ! -path "*.idb"`
+ ` ! -path "*.pdb"`
+ ` ! -path "*.mod*"`
+ ` ! -path "*.cmd"`
+ ` ! -path "*modules.order*"`
+ ` ! -path "*Module.symvers*"`
+ ` ! -path "*Mkfile.old*"`
+ ` ! -path "*dkms.conf*"`
+ ` ! -path "*.slo"`
+ ` ! -path "*.mod"`
+ ` ! -path "*.smod"`
+ ` ! -path "*.lai"`
+ ` ! -path "*.orig"`
+ ` ! -path "*.class"`
+ ` ! -path "*.log"`
+ ` ! -path "*.ctxt"`
+ ` ! -path "*.mtj.tmp/*"`
+ ` ! -path "*.jar"`
+ ` ! -path "*.war"`
+ ` ! -path "*.ear"`
+ ` ! -path "*.zip"`
+ ` ! -path "*.tar.gz"`
+ ` ! -path "*.rar"`
+ ` ! -path "*hs_err_pid*"`
+ ` ! -path "*logs*"`
+ ` ! -path "*yarn-debug.log*"`
+ ` ! -path "*yarn-error.log*"`
+ ` ! -path "*.pid"`
+ ` ! -path "*.seed"`
+ ` ! -path "*.pid.lock"`
+ ` ! -path "*.nyc_output"`
+ ` ! -path "*.grunt"`
+ ` ! -path "*bower_components*"`
+ ` ! -path ".lock-wscript"`
+ ` ! -path "*build/Release*"`
+ ` ! -path "*jspm_packages/*"`
+ ` ! -path "*.npm*"`
+ ` ! -path ".eslintcache"`
+ ` ! -path ".node_repl_history"`
+ ` ! -path "*.tgz"`
+ ` ! -path ".yarn-integrity"`
+ ` ! -path ".env"`
+ ` ! -path "__pycache__/"`
+ ` ! -path "*.py[cod]*"`
+ ` ! -path "*$py.class*"`
+ ` ! -path "*.Python*"`
+ ` ! -path "*env/*"`
+ ` ! -path "*build/*"`
+ ` ! -path "develop-eggs/"`
+ ` ! -path "eggs/"`
+ ` ! -path ".eggs/"`
+ ` ! -path "lib/"`
+ ` ! -path "lib64/"`
+ ` ! -path "parts/"`
+ ` ! -path "sdist/"`
+ ` ! -path "var/"`
+ ` ! -path "wheels/"`
+ ` ! -path "*.egg-info/"`
+ ` ! -path ".installed.cfg"`
+ ` ! -path "*.egg"`
+ ` ! -path "*.manifest"`
+ ` ! -path "*.spec"`
+ ` ! -path "pip-log.txt"`
+ ` ! -path "pip-delete-this-directory.txt"`
+ ` ! -path "htmlcov/"`
+ ` ! -path ".tox/"`
+ ` ! -path ".coverage"`
+ ` ! -path ".coverage.*"`
+ ` ! -path ".cache"`
+ ` ! -path "nosetests.xml"`
+ ` ! -path "coverage.xml"`
+ ` ! -path "*,cover"`
+ ` ! -path ".hypothesis/"`
+ ` ! -path "*.mo"`
+ ` ! -path "*.pot"`
+ ` ! -path "local_settings.py"`
+ ` ! -path "instance/"`
+ ` ! -path ".webassets-cache"`
+ ` ! -path ".scrapy"`
+ ` ! -path "docs/_build/"`
+ ` ! -path "target/"`
+ ` ! -path ".ipynb_checkpoints"`
+ ` ! -path ".python-version"`
+ ` ! -path "celerybeat-schedule"`
+ ` ! -path "*.sage.py"`
+ ` ! -path ".venv"`
+ ` ! -path "venv/"`
+ ` ! -path "ENV/"`
+ ` ! -path ".spyderproject"`
+ ` ! -path ".ropeproject"`
+ ` ! -path "*.gem"`
+ ` ! -path "*.rbc"`
+ ` ! -path "./.config"`
+ ` ! -path "./coverage/"`
+ ` ! -path "./pkg/"`
+ ` ! -path ".dat*"`
+ ` ! -path "*.rvmrc*"`
+ ` ! -path "*.jpg"`
+ ` ! -path "*.jpeg"`
+ ` ! -path "*.jpe"`
+ ` ! -path "*.jif"`
+ ` ! -path "*.jfif"`
+ ` ! -path "*.jfi"`
+ ` ! -path "*.jp2"`
+ ` ! -path "*.j2k"`
+ ` ! -path "*.jpf"`
+ ` ! -path "*.jpx"`
+ ` ! -path "*.jpm"`
+ ` ! -path "*.mj2"`
+ ` ! -path "*.jxr"`
+ ` ! -path "*.hdp"`
+ ` ! -path "*.wdp"`
+ ` ! -path "*.gif"`
+ ` ! -path "*.raw"`
+ ` ! -path "*.webp"`
+ ` ! -path "*.png"`
+ ` ! -path "*.apng"`
+ ` ! -path "*.mng"`
+ ` ! -path "*.tiff"`
+ ` ! -path "*.tif"`
+ ` ! -path "*.svg"`
+ ` ! -path "*.svgz"`
+ ` ! -path "*.pdf"`
+ ` ! -path "*.xbm"`
+ ` ! -path "*.bmp"`
+ ` ! -path "*.dib"`
+ ` ! -path "*.ico"`
+ ` ! -path "*.3dm"`
+ ` ! -path "*.max"`
;

module.exports = { ignoreFilesAndDirs };